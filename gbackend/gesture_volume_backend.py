# gesture_volume_backend.py

import cv2
import mediapipe as mp
from math import hypot
import numpy as np
import asyncio
import websockets
import json
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

# Initialize MediaPipe hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(max_num_hands=1, min_detection_confidence=0.7)

# Initialize audio controller
audio_device = AudioUtilities.GetSpeakers()
audio_interface = audio_device.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume_controller = cast(audio_interface, POINTER(IAudioEndpointVolume))
volume_min, volume_max = volume_controller.GetVolumeRange()[:2]

# Open webcam
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    raise RuntimeError("Error: Could not open webcam.")

async def volume_websocket(websocket, path):
    print(f"New client connected from {websocket.remote_address}")

    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                continue

            frame = cv2.flip(frame, 1)
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = hands.process(frame_rgb)

            volume_percentage = None

            if results.multi_hand_landmarks:
                h, w, _ = frame.shape
                landmarks = results.multi_hand_landmarks[0].landmark

                # Thumb tip coordinates
                x1, y1 = int(landmarks[4].x * w), int(landmarks[4].y * h)
                # Index finger tip coordinates
                x2, y2 = int(landmarks[8].x * w), int(landmarks[8].y * h)

                # Distance between thumb tip and index tip
                distance = hypot(x2 - x1, y2 - y1)

                # Map distance to system volume range
                mapped_volume = np.interp(distance, [30, 250], [volume_min, volume_max])
                volume_percentage = np.interp(distance, [30, 250], [0, 100])

                # Set system volume
                volume_controller.SetMasterVolumeLevel(mapped_volume, None)

                # Draw landmarks and connection line (for debugging / display)
                mp.solutions.drawing_utils.draw_landmarks(
                    frame, results.multi_hand_landmarks[0], mp_hands.HAND_CONNECTIONS
                )
                cv2.circle(frame, (x1, y1), 10, (255, 0, 255), cv2.FILLED)
                cv2.circle(frame, (x2, y2), 10, (255, 0, 255), cv2.FILLED)
                cv2.line(frame, (x1, y1), (x2, y2), (255, 0, 255), 3)

            # Send volume percentage to frontend (or 0 if no hand detected)
            data = {'volume': int(volume_percentage) if volume_percentage is not None else 0}

            try:
                await websocket.send(json.dumps(data))
            except websockets.exceptions.ConnectionClosed:
                print("Client disconnected.")
                break

            # Show debug window
            cv2.imshow('Gesture Volume Control Backend', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                print("Quitting gesture volume backend.")
                break

            # Slight delay for ~30fps
            await asyncio.sleep(0.03)

    finally:
        print("Releasing camera and closing OpenCV window.")
        cap.release()
        cv2.destroyAllWindows()

async def main():
    async with websockets.serve(volume_websocket, "localhost", 8765):
        print("WebSocket server started at ws://localhost:8765")
        await asyncio.Future()  # run forever

if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Server manually stopped.")

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

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(max_num_hands=1, min_detection_confidence=0.7)

# Setup audio control
audio_device = AudioUtilities.GetSpeakers()
audio_interface = audio_device.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume_controller = cast(audio_interface, POINTER(IAudioEndpointVolume))
volume_min, volume_max = volume_controller.GetVolumeRange()[:2]

async def volume_websocket(websocket):
    print(f"New client connected from {websocket.remote_address}")
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("Error: Could not open webcam.")
        await websocket.close()
        return

    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                continue

            frame = cv2.flip(frame, 1)
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = hands.process(frame_rgb)

            if results.multi_hand_landmarks:
                h, w, _ = frame.shape
                landmarks = results.multi_hand_landmarks[0].landmark

                x1, y1 = int(landmarks[4].x * w), int(landmarks[4].y * h)   # Thumb tip
                x2, y2 = int(landmarks[8].x * w), int(landmarks[8].y * h)   # Index finger tip

                distance = hypot(x2 - x1, y2 - y1)

                # Map distance to volume range
                mapped_volume = np.interp(distance, [30, 250], [volume_min, volume_max])
                volume_percentage = np.interp(distance, [30, 250], [0, 100])

                volume_controller.SetMasterVolumeLevel(mapped_volume, None)

                try:
                    data = {'volume': int(volume_percentage)}
                    await websocket.send(json.dumps(data))
                except websockets.exceptions.ConnectionClosed:
                    print("Client disconnected.")
                    break

            await asyncio.sleep(0.03)

    finally:
        print(f"Releasing camera for client {websocket.remote_address}")
        cap.release()

async def main():
    async with websockets.serve(volume_websocket, "localhost", 8765):
        print("WebSocket server started at ws://localhost:8765")
        await asyncio.Future()  # run forever

if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Server manually stopped.")

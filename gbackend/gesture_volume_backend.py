import cv2
import mediapipe as mp
from math import hypot
import numpy as np
import asyncio
import websockets
import json

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(max_num_hands=1, min_detection_confidence=0.7)

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

                # Simulated volume percentage based on distance
                volume_percentage = np.interp(distance, [30, 250], [0, 100])
                volume_percentage = int(np.clip(volume_percentage, 0, 100))

                try:
                    data = {'volume': volume_percentage}
                    await websocket.send(json.dumps(data))
                    print(f"Sent volume: {volume_percentage}%")
                except websockets.exceptions.ConnectionClosed:
                    print("Client disconnected.")
                    break

            await asyncio.sleep(0.03)

    finally:
        print(f"Releasing camera for client {websocket.remote_address}")
        cap.release()

async def main():
    async with websockets.serve(volume_websocket, "0.0.0.0", 8765):
        print("WebSocket server started at ws://0.0.0.0:8765")
        await asyncio.Future()  # run forever

if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Server manually stopped.")

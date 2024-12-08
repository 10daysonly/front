"use client";
import styles from "./invite-room.module.css";

import React, { useEffect, useState } from "react";
export default function Home() {
  const [messages, setMessages] = useState<string[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // 웹소켓 서버 URL
    const ws = new WebSocket("wss://your-websocket-server.com");

    // 연결 시 이벤트
    ws.onopen = () => {
      console.log("WebSocket connected");
      ws.send(JSON.stringify({ type: "HELLO", message: "Hello Server!" }));
    };

    // 메시지 수신 시 이벤트
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Message received:", data);
      setMessages((prev) => [...prev, data.message]);
    };

    // 연결 종료 시 이벤트
    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    // 에러 처리
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // 컴포넌트 unmount 시 연결 종료
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Messages</h1>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

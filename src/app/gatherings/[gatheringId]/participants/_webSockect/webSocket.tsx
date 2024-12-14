"use client";

import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface WebSocketHookProps {
  gatheringId: string;
  token: string;
}

export const useWebSocket = ({ gatheringId, token }: WebSocketHookProps) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // WebSocket URL 동적 생성
    const wsUrl = `wss://ringly-api.oognuyh.com/ws/gatherings/${gatheringId}?token=${token}`;

    // WebSocket 연결
    const ws = new WebSocket(wsUrl);

    // 연결 성공 핸들러
    ws.onopen = () => {
      console.log("WebSocket 연결 성공");
      setIsConnected(true);
    };

    // 메시지 수신 핸들러
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    // 연결 종료 핸들러
    ws.onclose = (event) => {
      console.log("WebSocket 연결 종료:", event);
      setIsConnected(false);
    };

    // 에러 핸들러
    ws.onerror = (error) => {
      console.error("WebSocket 에러:", error);
      setError("WebSocket 연결 중 오류 발생");
    };

    // 소켓 상태 저장
    setSocket(ws);

    // 컴포넌트 언마운트 시 연결 종료
    return () => {
      ws.close();
    };
  }, [gatheringId, token]);

  // 메시지 전송 함법
  const sendMessage = (message: any) => {
    if (socket && isConnected) {
      socket.send(JSON.stringify(message));
    }
  };

  return {
    socket,
    isConnected,
    messages,
    error,
    sendMessage,
  };
};

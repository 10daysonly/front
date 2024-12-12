import React from "react";

import "./ChatBubble.scss";

interface Props {
  children: React.ReactNode;
  direction?: "left" | "right";
  avatar?: React.ReactNode;
  time?: string;
  actions?: React.ReactNode;
}

const ChatBubble = ({ children, direction = "left", avatar, time, actions }: Props) => {
  return (
    <div className={`ui-chat-bubble direction-${direction}`}>
      {avatar && <div className="chat-bubble-avatar">{avatar}</div>}
      <div className="chat-bubble-box">
        {time && direction === "right" && <div className="chat-bubble-time">{time}</div>}
        <div className="chat-bubble-content">{children}</div>
        {time && direction === "left" && <div className="chat-bubble-time">{time}</div>}
        {actions && <div className="chat-bubble-actions">{actions}</div>}
      </div>
    </div>
  );
};

export default ChatBubble;

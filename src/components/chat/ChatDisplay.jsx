import React from "react";

function ChatDisplay({ messages }) {
  return (
    <div className="chat-display">
      {messages.map((m, idx) => (
        <div key={idx}>
          <span style={{ color: m.color, fontWeight: "bold" }}>{m.user}</span> -{" "}
          {m.body}
        </div>
      ))}
    </div>
  );
}

export default ChatDisplay;

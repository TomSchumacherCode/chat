import React, { useState } from "react";

function ChatInput({ sendMessage }) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() => {
          if (message.length > 0) {
            sendMessage(message);
            setMessage("");
          }
        }}
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;

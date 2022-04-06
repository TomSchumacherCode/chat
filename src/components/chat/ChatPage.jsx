import React from "react";
import useSocket from "../../hooks/useSocket";
import { useParams } from "react-router-dom";
import ChatDisplay from "./ChatDisplay";
import ChatInput from "./ChatInput";
function ChatPage({ user }) {
  //! Get the roomID param from the path we're on
  const { roomID } = useParams();
  const { messages, sendMessage } = useSocket(roomID, user);
  return (
    <div>
      <ChatDisplay messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatPage;

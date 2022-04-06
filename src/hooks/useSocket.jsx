import socketIoClient from "socket.io-client";
import { useCallback, useState, useRef, useEffect } from "react";

const useSocket = (roomID, user) => {
  const [color, setColor] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    //! Make socket connection
    //! Handle connection, have "ON"s for:
    //! "new message" and "assigned color"
    socketRef.current = socketIoClient("http://localhost:8080", {
      query: { user, roomID },
    });

    socketRef.current.on("assigned color", ({ color }) => {
      setColor(color);
    });

    socketRef.current.on("new message", (msg) => {
      setMessages((curr) => [...curr, msg]);
    });
  }, [roomID]);

  //! Function for emitting "chat message"
  const sendMessage = (body) => {
    const msg = { body, user, color };
    socketRef.current.emit("chat message", msg);
  };

  return { sendMessage, messages };
};

export default useSocket;

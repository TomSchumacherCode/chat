import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ setUser }) {
  const roomIDRef = useRef(null);
  const usernameRef = useRef(null);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="room-id">Room ID</label>
        <input type="text" id="room-id" ref={roomIDRef} />
      </div>
      <button
        onClick={() => {
          const username = usernameRef.current.value;
          const roomID = roomIDRef.current.value;
          if (username.length > 0 && roomID.length > 0) {
            setUser(username);
            //! `/chat/${roomID}`
            navigate(`/chat/${roomID}`);
          }
        }}
      >
        Join Chat Room
      </button>
    </div>
  );
}

export default HomePage;

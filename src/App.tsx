// src/App.tsx
import React, { useState } from "react";
import Notification from "./components/Notification/Notification";
import useNotification from "./hooks/useNotification";
import "./styles/Notification.css";

const App: React.FC = () => {
  const [message, setMessage] = useState("");

  const { showNotification } = useNotification();
  const HandleButtonClick = (message: string) => {
    showNotification(message);
  };

  return (
    <div>
      <h1>React Context API Notification System</h1>
      <input
        className="messageInput"
        type="text"
        placeholder="Type a notification message"
        onChange={(e) => setMessage(e.target.value.trim())}
      />
      <button
        className="notificationButton"
        onClick={() => HandleButtonClick(message)}
      >
        Show Notification
      </button>
      <Notification message="Hello from App component!" />
    </div>
  );
};

export default App;

import React, { createContext, useContext, useState, ReactNode } from "react";

interface NotificationContextProps {
  showNotification: (message: string) => void;
  removeNotification: (index: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined
);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<string[]>([]);

  const showNotification = (message: string) => {
    setNotifications((prevNotifications) => [...prevNotifications, message]);
  };

  const removeNotification = (index: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, i) => i !== index)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ showNotification, removeNotification }}
    >
      {children}
      <div className="notification-container">
        {notifications.map((message, index) => (
          <div
            key={index}
            className="notification"
            onClick={() => removeNotification(index)}
          >
            {message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

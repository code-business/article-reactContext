import { useNotification as useNotificationContext } from "../components/NotificationProvider/NotificationProvider";

const useNotification = () => {
  const { showNotification } = useNotificationContext();
  return { showNotification };
};

export default useNotification;

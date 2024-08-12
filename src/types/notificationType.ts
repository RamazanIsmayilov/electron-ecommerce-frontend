export type NotificationType = "success" | "warning" | "error";

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

export interface NotificationContextType {
  notifications: Notification[];
  successNotification: (message: string) => void;
  warningNotification: (message: string) => void;
  errorNotification: (message: string) => void;
}


export const defaultNotificationValue: NotificationContextType = {
    notifications: [],
    successNotification: () => {},
    warningNotification: () => {},
    errorNotification: () => {},
};
import React, { createContext, ReactNode, useState } from 'react';
import { defaultNotificationValue, Notification, NotificationContextType, NotificationType } from '../types/notificationType';

export const NotificationContext = createContext<NotificationContextType>(defaultNotificationValue);

export const NotificationProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (message: string, type: NotificationType) => {
        const id = Date.now();
        setNotifications(prev => [
            ...prev,
            { id, message, type }
        ]);

        setTimeout(() => {
            setNotifications(prev => prev.filter(notification => notification.id !== id));
        }, 3000);
    };

    const successNotification = (message: string) => addNotification(message, 'success');
    const warningNotification = (message: string) => addNotification(message, 'warning');
    const errorNotification = (message: string) => addNotification(message, 'error');

    return (
        <NotificationContext.Provider value={{ notifications, successNotification, warningNotification, errorNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

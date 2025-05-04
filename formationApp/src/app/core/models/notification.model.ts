export enum NotificationType {
    Info = 0,
    Success = 1,
    Warning = 2,
    Danger = 3
}

export interface Notification {
    id: number;
    title: string;
    body: string;
    date: Date;
    received: boolean;
    userId: number;
    type: NotificationType;
    actionUrl: string | null;
}

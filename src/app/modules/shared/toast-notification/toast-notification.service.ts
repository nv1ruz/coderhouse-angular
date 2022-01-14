import { Injectable } from '@angular/core';

export interface IToastNotification {
    type: 'success' | 'danger' | 'info' | 'warning';
    title: string;
    message: string;
    timeout: number;
    visible?: boolean;
    animateClose?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ToastNotificationService {
    private _notifications: IToastNotification[] = [];

    constructor() {}

    get notifications(): IToastNotification[] {
        return this._notifications;
    }

    public showNotification(notification: IToastNotification): void {
        notification.visible = true;
        notification.animateClose = false;

        this._notifications.push(notification);

        const indexNotification = this._notifications.length - 1;

        setTimeout(() => {
            this.hideNotification(indexNotification);
        }, notification.timeout);
    }

    public hideNotification(indexNotification: number): void {
        this._notifications[indexNotification].animateClose = true;

        setTimeout(() => {
            this._notifications[indexNotification].visible = false;
        }, 200);
    }
}

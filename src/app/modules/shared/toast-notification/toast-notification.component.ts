import { Component, OnInit } from '@angular/core';
import { ToastNotificationService } from './toast-notification.service';

@Component({
    selector: 'app-toast-notification',
    templateUrl: './toast-notification.component.html',
    styleUrls: ['./toast-notification.component.css'],
})
export class ToastNotificationComponent implements OnInit {
    constructor(public _toastNotification: ToastNotificationService) {}

    ngOnInit(): void {}
}

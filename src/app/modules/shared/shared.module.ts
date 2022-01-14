import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './alert/alert.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';

@NgModule({
    declarations: [TabsComponent, NavbarComponent, AlertComponent, ToastNotificationComponent],
    imports: [CommonModule],
    exports: [TabsComponent, NavbarComponent, AlertComponent, ToastNotificationComponent],
})
export class SharedModule {}

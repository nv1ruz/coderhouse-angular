import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
    declarations: [TabsComponent, NavbarComponent, AlertComponent],
    imports: [CommonModule],
    exports: [TabsComponent, NavbarComponent, AlertComponent],
})
export class SharedModule {}

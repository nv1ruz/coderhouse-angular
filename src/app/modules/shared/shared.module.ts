import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [TabsComponent, NavbarComponent],
    imports: [CommonModule],
    exports: [TabsComponent],
})
export class SharedModule {}

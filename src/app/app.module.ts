import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppComponent } from './app.component';

import { MainSidebarComponent } from './template/components/main-sidebar/main-sidebar.component';
import { MainTemplateComponent } from './template/pages/main-template/main-template.component';

@NgModule({
    declarations: [AppComponent, MainSidebarComponent, MainTemplateComponent],
    imports: [BrowserModule, AppRoutingModule, SharedModule, AuthModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

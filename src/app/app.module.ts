import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppComponent } from './app.component';

import { MainSidebarComponent } from './template/components/main-sidebar/main-sidebar.component';
import { MainTemplateComponent } from './template/pages/main-template/main-template.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { LastCartsComponent } from './pages/last-carts/last-carts.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        AppComponent,
        MainSidebarComponent,
        MainTemplateComponent,
        UserProfileComponent,
        CartComponent,
        LastCartsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        AuthModule,
        HttpClientModule,
        StoreModule.forRoot({}, {}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

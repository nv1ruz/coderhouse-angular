import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';
import { appReducers } from './store/app.reducer';

// components
import { AppComponent } from './app.component';
import { MainSidebarComponent } from './template/components/main-sidebar/main-sidebar.component';
import { MainTemplateComponent } from './template/pages/main-template/main-template.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { LastCartsComponent } from './pages/last-carts/last-carts.component';

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
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot(EffectsArray),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';

@NgModule({
    declarations: [AuthenticationComponent, FormLoginComponent, FormRegisterComponent],
    imports: [CommonModule, AuthRoutingModule, HttpClientModule, ReactiveFormsModule, SharedModule],
})
export class AuthModule {}

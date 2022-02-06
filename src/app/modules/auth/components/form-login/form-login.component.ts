import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { userActionLogin } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
    private isEmail: RegExp = /^\S+@\S+\.\S+$/;
    public formLogin: FormGroup = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
        password: new FormControl('', [Validators.required]),
    });
    public alertIsVisible: boolean = false;
    public alertType: 'success' | 'danger' | 'info' | 'warning';
    public alertMessage: string = '';
    private userStateSubscription: Subscription;

    constructor(private store: Store<AppState>, private fb: FormBuilder) {
        this.userStateSubscription = this.store.select('user').subscribe((state) => {
            console.log(state);
            if (state.hasError) {
                this.alertIsVisible = true;
                this.alertType = 'danger';
                this.alertMessage = state.errorMessage;
                setTimeout(() => {
                    this.alertIsVisible = false;
                }, 4000);
            }
        });
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        if (this.userStateSubscription) this.userStateSubscription.unsubscribe();
    }

    public onSubmit(): void {
        console.log('Formulario login: ', this.formLogin.value);
        const email = this.formLogin.controls['email'].value;
        const password = this.formLogin.controls['password'].value;

        this.store.dispatch(userActionLogin({ email: email, password: password }));
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';

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

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private _usersApi: UsersApiService
    ) {}

    ngOnInit(): void {}

    public onSubmit(): void {
        console.log('Formulario login: ', this.formLogin.value);
        const email = this.formLogin.controls['email'].value;
        const password = this.formLogin.controls['password'].value;

        const subscription = this._usersApi.login(email, password).subscribe(
            (response) => {
                if (response.ok) {
                    this.router.navigateByUrl('');
                }

                if (subscription) subscription.unsubscribe();
            },
            (err) => {
                console.error(err);
            }
        );
    }
}

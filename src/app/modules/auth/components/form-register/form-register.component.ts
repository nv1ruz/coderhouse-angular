import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';

@Component({
    selector: 'app-form-register',
    templateUrl: './form-register.component.html',
    styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
    private isEmail: RegExp = /^\S+@\S+\.\S+$/;
    public formRegister: FormGroup = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
        password: new FormControl('', [Validators.required]),
        password2: new FormControl('', [Validators.required]),
    });
    public isWrongPassword: boolean = false;

    constructor(
        private fb: FormBuilder,
        private _usersApi: UsersApiService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    public onSubmit(): void {
        console.log('Formulario registrar: ', this.formRegister.value);

        const email = this.formRegister.controls['email'].value;
        const password = this.formRegister.controls['password'].value;

        const subscription = this._usersApi.register(email, password).subscribe(
            (response) => {
                if (response.ok) {
                    console.log('Usuario creado con éxito');
                    console.log(response);
                    this.router.navigateByUrl('');
                }
                if (subscription) subscription.unsubscribe();
            },
            (err) => {
                console.error(err);
            }
        );
    }

    public handlerPassword(): void {
        const password = this.formRegister.controls['password'].value;
        const password2 = this.formRegister.controls['password2'].value;

        this.isWrongPassword = password !== password2 ? true : false;
    }
}

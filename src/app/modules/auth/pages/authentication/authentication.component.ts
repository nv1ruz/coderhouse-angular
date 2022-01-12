import { Component, OnInit } from '@angular/core';
import { ITab } from 'src/app/modules/shared/tabs/tabs.component';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
    public tabs: ITab[] = [
        {
            id: 1,
            name: 'Login',
        },
        {
            id: 2,
            name: 'Registrar cuenta',
        },
    ];
    public tabSelected: ITab;

    constructor() {}

    ngOnInit(): void {}
}

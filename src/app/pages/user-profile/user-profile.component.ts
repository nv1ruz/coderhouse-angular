import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/data/apis/api-movies/interfaces/users-api.interface';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
    public user: IUser;

    constructor(private _usersApi: UsersApiService) {}

    ngOnInit(): void {
        this.user = this._usersApi.user;
    }

    public logout(): void {
        this._usersApi.logout();
    }
}

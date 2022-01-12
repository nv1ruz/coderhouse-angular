import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
    IUser,
    IUserLoginResponse,
    IUserRegisterResponse,
    IUserRenewTokenResponse,
} from '../interfaces/users-api.interface';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UsersApiService {
    private base_url_api_movies: string = environment.base_url_api_movies;
    private _user: IUser;

    constructor(private http: HttpClient) {}

    get token(): string {
        return localStorage.getItem('ACCESS_TOKEN');
    }

    set token(value: string) {
        localStorage.setItem('ACCESS_TOKEN', value);
    }

    public login(email: string, password: string): Observable<IUserLoginResponse> {
        const url = `${this.base_url_api_movies}/users/login`;
        const data = {
            email,
            password,
        };

        return this.http.post<IUserLoginResponse>(url, data).pipe(
            tap((respone) => {
                localStorage.setItem('ACCESS_TOKEN', respone.data.accessToken);
            })
        );
    }

    public register(email: string, password: string): Observable<IUserRegisterResponse> {
        const url = `${this.base_url_api_movies}/users/register`;
        const data = {
            email,
            password,
        };

        return this.http.post<IUserRegisterResponse>(url, data).pipe(
            tap((respone) => {
                localStorage.setItem('ACCESS_TOKEN', respone.data.accessToken);
            })
        );
    }

    public validateToken(): Observable<boolean> {
        const url = `${this.base_url_api_movies}/users/renew`;
        const headers: HttpHeaders = new HttpHeaders().set('access-token', this.token);

        return this.http.get<IUserRenewTokenResponse>(url, { headers }).pipe(
            map((response) => {
                this._user = response.data;
                this.token = response.data.accessToken;
                return true;
            }),
            catchError((error) => of(false))
        );
    }
}

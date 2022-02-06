import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
    ICartInsertData,
    ICartInsertResponse,
    ICartsByUserResponse,
    ICartsLastResponse,
} from '../interfaces/carts-api.interface';
import { UsersApiService } from './users-api.service';

@Injectable({
    providedIn: 'root',
})
export class CartsApiService {
    private base_url_api_movies: string = environment.base_url_api_movies;

    constructor(private http: HttpClient, private _usersApi: UsersApiService) {}

    public addCart(data: ICartInsertData): Observable<any> {
        const url = `${this.base_url_api_movies}/carts`;
        const headers: HttpHeaders = new HttpHeaders().set(
            'access-token',
            this._usersApi.user.accessToken
        );

        return this.http.post<any>(url, data, { headers });
    }

    public getLastCartsByUserId(userId: string): Observable<ICartsByUserResponse> {
        const url = `${this.base_url_api_movies}/carts/last_carts/user/${userId}`;
        const headers: HttpHeaders = new HttpHeaders().set(
            'access-token',
            this._usersApi.user.accessToken
        );

        return this.http.get<ICartsByUserResponse>(url, { headers });
    }

    public getLastCarts(): Observable<ICartsLastResponse> {
        const url = `${this.base_url_api_movies}/carts/last_carts/all`;
        const headers: HttpHeaders = new HttpHeaders().set(
            'access-token',
            this._usersApi.user.accessToken
        );

        return this.http.get<ICartsLastResponse>(url, { headers });
    }
}

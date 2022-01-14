import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
    ICartInsertData,
    ICartInsertResponse,
    ICartsByUserResponse,
    ICartsLastResponse,
} from '../interfaces/carts-api.interface';

@Injectable({
    providedIn: 'root',
})
export class CartsApiService {
    private base_url_api_movies: string = environment.base_url_api_movies;

    constructor(private http: HttpClient) {}

    public addCart(data: ICartInsertData): Observable<any> {
        const url = `${this.base_url_api_movies}/carts`;

        return this.http.post<any>(url, data);
    }

    public getLastCartsByUserId(userId: string): Observable<ICartsByUserResponse> {
        const url = `${this.base_url_api_movies}/carts/last_carts/user/${userId}`;

        return this.http.get<ICartsByUserResponse>(url);
    }

    public getLastCarts(): Observable<ICartsLastResponse> {
        const url = `${this.base_url_api_movies}/carts/last_carts/all`;

        return this.http.get<ICartsLastResponse>(url);
    }
}

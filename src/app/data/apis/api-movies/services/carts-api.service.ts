import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICartInsertData, ICartInsertResponse } from '../interfaces/carts-api.interface';

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
}

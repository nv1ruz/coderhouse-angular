import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
    IMovieDeleteResponse,
    IMovieInsertData,
    IMovieInsertResponse,
    IMovieResponse,
    IMoviesResponse,
    IMovieUpdateData,
    IMovieUpdateResponse,
} from '../interfaces/movies-api.interface';
import { UsersApiService } from './users-api.service';

@Injectable({
    providedIn: 'root',
})
export class MoviesApiService {
    private base_url_api_movies: string = environment.base_url_api_movies;

    constructor(private http: HttpClient, private _usersApi: UsersApiService) {}

    public getMovies(): Observable<IMoviesResponse> {
        const url = `${this.base_url_api_movies}/products`;
        const headers: HttpHeaders = new HttpHeaders().set(
            'access-token',
            this._usersApi.user.accessToken
        );

        return this.http.get<IMoviesResponse>(url, { headers });
    }

    public getMovieById(movieId: string): Observable<IMovieResponse> {
        const url = `${this.base_url_api_movies}/products/${movieId}`;
        const headers: HttpHeaders = new HttpHeaders().set(
            'access-token',
            this._usersApi.user.accessToken
        );

        return this.http.get<IMovieResponse>(url, { headers });
    }

    public createMovie(data: IMovieInsertData): Observable<IMovieInsertResponse> {
        const url = `${this.base_url_api_movies}/products`;
        const headers: HttpHeaders = new HttpHeaders().set(
            'access-token',
            this._usersApi.user.accessToken
        );

        return this.http.post<IMovieInsertResponse>(url, data, { headers });
    }

    public updateMovie(id: string, data: IMovieUpdateData): Observable<IMovieUpdateResponse> {
        const url = `${this.base_url_api_movies}/products/${id}`;
        const headers: HttpHeaders = new HttpHeaders().set(
            'access-token',
            this._usersApi.user.accessToken
        );

        return this.http.put<IMovieUpdateResponse>(url, data, { headers });
    }

    public deleteMovie(id: string): Observable<IMovieDeleteResponse> {
        const url = `${this.base_url_api_movies}/products/${id}`;
        const headers: HttpHeaders = new HttpHeaders().set(
            'access-token',
            this._usersApi.user.accessToken
        );

        return this.http.delete<IMovieDeleteResponse>(url, { headers });
    }
}

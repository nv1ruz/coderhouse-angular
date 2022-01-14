import { HttpClient } from '@angular/common/http';
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

@Injectable({
    providedIn: 'root',
})
export class MoviesApiService {
    private base_url_api_movies: string = environment.base_url_api_movies;

    constructor(private http: HttpClient) {}

    public getMovies(): Observable<IMoviesResponse> {
        const url = `${this.base_url_api_movies}/products`;

        return this.http.get<IMoviesResponse>(url);
    }

    public getMovieById(movieId: string): Observable<IMovieResponse> {
        const url = `${this.base_url_api_movies}/products/${movieId}`;

        return this.http.get<IMovieResponse>(url);
    }

    public createMovie(data: IMovieInsertData): Observable<IMovieInsertResponse> {
        const url = `${this.base_url_api_movies}/products`;

        return this.http.post<IMovieInsertResponse>(url, data);
    }

    public updateMovie(id: string, data: IMovieUpdateData): Observable<IMovieUpdateResponse> {
        const url = `${this.base_url_api_movies}/products/${id}`;

        return this.http.put<IMovieUpdateResponse>(url, data);
    }

    public deleteMovie(id: string): Observable<IMovieDeleteResponse> {
        const url = `${this.base_url_api_movies}/products/${id}`;

        return this.http.delete<IMovieDeleteResponse>(url);
    }
}

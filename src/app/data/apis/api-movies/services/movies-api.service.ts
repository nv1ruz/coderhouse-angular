import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieResponse, IMoviesResponse } from '../interfaces/movies-api.interface';

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
}

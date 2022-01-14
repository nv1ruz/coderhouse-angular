import { Injectable } from '@angular/core';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';

@Injectable({
    providedIn: 'root',
})
export class CrudMoviesService {
    private _movies: IMovie[] = [];

    constructor(private _moviesApi: MoviesApiService) {}

    get movies(): IMovie[] {
        return this._movies;
    }

    public loadMovies(): void {
        const moviesSubscription = this._moviesApi.getMovies().subscribe((response) => {
            if (response.ok) this._movies = response.data;
            if (moviesSubscription) moviesSubscription.unsubscribe();
        });
    }
}

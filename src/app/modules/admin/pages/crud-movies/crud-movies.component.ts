import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';
import { EditMovieModalService } from '../../services/edit-movie-modal.service';
import { NewMovieModalService } from '../../services/new-movie-modal.service';

@Component({
    selector: 'app-crud-movies',
    templateUrl: './crud-movies.component.html',
    styleUrls: ['./crud-movies.component.css'],
})
export class CrudMoviesComponent implements OnInit {
    public movies: IMovie[] = [];
    private moviesSubscription: Subscription;

    constructor(
        private _moviesApi: MoviesApiService,
        public _newMovieModal: NewMovieModalService,
        public _editMovieModal: EditMovieModalService
    ) {}

    ngOnInit(): void {
        this.loadMovies();
    }

    ngOnDestroy(): void {
        if (this.moviesSubscription) this.moviesSubscription.unsubscribe();
    }

    private loadMovies(): void {
        this.moviesSubscription = this._moviesApi.getMovies().subscribe((response) => {
            if (response.ok) this.movies = response.data;
            if (this.moviesSubscription) this.moviesSubscription.unsubscribe();
        });
    }
}

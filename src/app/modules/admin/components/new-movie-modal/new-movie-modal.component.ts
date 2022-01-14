import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMovieInsertData } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';
import { CrudMoviesService } from '../../services/crud-movies.service';
import { NewMovieModalService } from '../../services/new-movie-modal.service';

@Component({
    selector: 'app-new-movie-modal',
    templateUrl: './new-movie-modal.component.html',
    styleUrls: ['./new-movie-modal.component.css'],
})
export class NewMovieModalComponent implements OnInit {
    public formMovie: FormGroup = this.fb.group({
        title: ['', Validators.required],
        description: [''],
        genred: ['', Validators.required],
        year: [0, Validators.required],
        image: [''],
        price: [0, Validators.required],
        stock: [0, Validators.required],
        stockMin: [0, Validators.required],
        isEnabled: [true, Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        public _newMovieModal: NewMovieModalService,
        private _moviesApi: MoviesApiService,
        private _crudMovies: CrudMoviesService
    ) {}

    ngOnInit(): void {}

    public createMovie(): void {
        const data = this.formMovie.value;
        const subscription = this._moviesApi.createMovie(data).subscribe((response) => {
            console.log(response);
            if (response.ok) {
                this._crudMovies.loadMovies();
                this._newMovieModal.close();
            }
            if (subscription) subscription.unsubscribe();
        });
    }
}

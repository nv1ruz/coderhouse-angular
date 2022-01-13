import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';
import { EditMovieModalService } from '../../services/edit-movie-modal.service';

@Component({
    selector: 'app-edit-movie-modal',
    templateUrl: './edit-movie-modal.component.html',
    styleUrls: ['./edit-movie-modal.component.css'],
})
export class EditMovieModalComponent implements OnInit {
    public formMovie: FormGroup = this.fb.group({
        id: ['', Validators.required],
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
        public _editMovieModal: EditMovieModalService,
        private _moviesApi: MoviesApiService
    ) {}

    ngOnInit(): void {
        this.loadMovie();
    }

    public loadMovie(): void {
        const movieId: string = this._editMovieModal.movieId;
        const subscription = this._moviesApi.getMovieById(movieId).subscribe((response) => {
            if (response.ok) this.setearForm(response.data);
            if (subscription) subscription.unsubscribe();
        });
    }

    private setearForm(movie: IMovie): void {
        this.formMovie.setValue({
            id: movie.id,
            title: movie.title,
            description: movie.description,
            genred: movie.genred,
            year: movie.year,
            image: movie.image,
            price: movie.price,
            stock: movie.stock,
            stockMin: movie.stockMin,
            isEnabled: movie.isEnabled,
        });
    }

    public updateMovie(): void {
        const movieId = this.formMovie.controls['id'].value;
        const subscription = this._moviesApi
            .updateMovie(movieId, this.formMovie.value)
            .subscribe((response) => {
                console.log(response);
                if (response.ok) this._editMovieModal.close();
                if (subscription) subscription.unsubscribe();
            });
    }
}

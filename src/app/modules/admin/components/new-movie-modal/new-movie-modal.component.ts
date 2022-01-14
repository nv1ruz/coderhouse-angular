import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMovieInsertData } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';
import { ToastNotificationService } from 'src/app/modules/shared/toast-notification/toast-notification.service';
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
        year: [null, Validators.required],
        image: [''],
        price: [null, Validators.required],
        stock: [null, Validators.required],
        stockMin: [null, Validators.required],
        isEnabled: [true, Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        public _newMovieModal: NewMovieModalService,
        private _moviesApi: MoviesApiService,
        private _crudMovies: CrudMoviesService,
        private _toastNotification: ToastNotificationService
    ) {}

    ngOnInit(): void {}

    public createMovie(): void {
        const data = this.formMovie.value;
        const subscription = this._moviesApi.createMovie(data).subscribe((response) => {
            console.log(response);
            if (response.ok) {
                this._crudMovies.loadMovies();
                this._newMovieModal.close();
                this._toastNotification.showNotification({
                    title: 'Éxito!',
                    message: 'Película creada correctamente',
                    type: 'success',
                    timeout: 7000,
                });
            }
            if (subscription) subscription.unsubscribe();
        });
    }
}

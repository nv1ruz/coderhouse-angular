import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';
import { loadMovie, loadMovieError, loadMovieSuccess } from '../actions';

@Injectable()
export class MovieEffects {
    constructor(private actions$: Actions, private _moviesApi: MoviesApiService) {}

    public loadMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovie),
            tap((data) => console.log('loadMovie Effect:', data)),
            mergeMap((action) =>
                this._moviesApi.getMovieById(action.id).pipe(
                    map((response) => loadMovieSuccess({ movie: response.data })),
                    catchError((err) => of(loadMovieError({ payload: err })))
                )
            )
        )
    );
}

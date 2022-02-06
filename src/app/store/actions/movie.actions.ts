import { createAction, props } from '@ngrx/store';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';

export enum movieTypes {
    LOAD_MOVIE = '[movie] load movie',
    LOAD_MOVIE_SUCCESS = '[movie] load movie success',
    LOAD_MOVIE_ERROR = '[movie] load movie error',
}

export const loadMovie = createAction(movieTypes.LOAD_MOVIE, props<{ id: string }>());
export const loadMovieSuccess = createAction(
    movieTypes.LOAD_MOVIE_SUCCESS,
    props<{ movie: IMovie }>()
);
export const loadMovieError = createAction(movieTypes.LOAD_MOVIE_ERROR, props<{ payload: any }>());

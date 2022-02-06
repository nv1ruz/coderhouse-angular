import { Action, createReducer, on } from '@ngrx/store';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { loadMovie, loadMovieError, loadMovieSuccess } from '../actions';

export interface IMovieState {
    movie: IMovie;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
}

export const movieInitialState: IMovieState = {
    movie: null,
    isLoading: false,
    hasError: false,
    errorMessage: '',
};

export function movieReducer(state = movieInitialState, action: Action) {
    return _movieReducer(state, action);
}

const _movieReducer = createReducer(
    movieInitialState,
    on(loadMovie, (state, { id }) => ({ ...state, isLoading: true, id: id })),
    on(loadMovieSuccess, (state, { movie }) => ({
        ...state,
        movie: { ...movie },
        isLoading: false,
        hasError: false,
    })),
    on(loadMovieError, (state, { payload }) => ({
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: payload.message,
    }))
);

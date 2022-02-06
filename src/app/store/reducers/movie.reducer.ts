import { Action, createReducer, on } from '@ngrx/store';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { loadMovie, loadMovieError, loadMovieSuccess } from '../actions';

export interface IMovieState {
    id: string;
    movie: IMovie;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const movieInitialState: IMovieState = {
    id: '',
    movie: null,
    loaded: false,
    loading: false,
    error: null,
};

export function movieReducer(state = movieInitialState, action: Action) {
    return _movieReducer(state, action);
}

const _movieReducer = createReducer(
    movieInitialState,
    on(loadMovie, (state, { id }) => ({ ...state, loading: true, id: id })),
    on(loadMovieSuccess, (state, { movie }) => ({
        ...state,
        loading: false,
        loaded: true,
        movie: { ...movie },
        error: null,
    })),
    on(loadMovieError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message,
        },
    }))
);

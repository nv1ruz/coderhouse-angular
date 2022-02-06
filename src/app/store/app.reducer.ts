import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    movie: reducers.IMovieState;
}

export const appReducers: ActionReducerMap<AppState> = {
    movie: reducers.movieReducer,
};

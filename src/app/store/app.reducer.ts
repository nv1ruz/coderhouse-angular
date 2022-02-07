import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    user: reducers.IUserState;
    movie: reducers.IMovieState;
    cart: reducers.ICartState;
}

export const appReducers: ActionReducerMap<AppState> = {
    user: reducers.userReducer,
    movie: reducers.movieReducer,
    cart: reducers.cartReducer,
};

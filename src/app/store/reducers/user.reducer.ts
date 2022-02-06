import { Action, createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/data/apis/api-movies/interfaces/users-api.interface";
import { userActionLogin, userActionLoginError, userActionLoginSucces } from "../actions/user.actions";



export interface IUserState{
    user: IUser,
    loggedIn: boolean;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
}

const initialState: IUserState = {
    user: null,
    loggedIn: false,
    isLoading: false,
    hasError: false,
    errorMessage: '',
}

// method

export function userReducer(
    state: IUserState = initialState, 
    action: Action
): IUserState {
    return reducer(state, action);
}

const reducer = createReducer(
    initialState,
    on(userActionLogin, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: ''
    })),
    on(userActionLoginSucces, (state, { user }) => ({
        ...state,
        loggedIn: true,
        isLoading: false,
        user: { ...user }
    })),
    on(userActionLoginError, (state, { payload }) => ({
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: payload.error.message,
    }))
);
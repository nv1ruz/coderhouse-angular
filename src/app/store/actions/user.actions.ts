import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/data/apis/api-movies/interfaces/users-api.interface';

export enum UserActionTypes {
    LOGIN = '[USER] LOGIN',
    LOGIN_SUCCESS = '[USER] LOGIN_SUCESS',
    LOGIN_ERROR = '[USER] LOGIN_ERROR',
}

// methods

export const userActionLogin = createAction(
    UserActionTypes.LOGIN,
    props<{ email: string; password: string }>()
);

export const userActionLoginSucces = createAction(
    UserActionTypes.LOGIN_SUCCESS, 
    props<{ user: IUser }>()
);

export const userActionLoginError = createAction(
    UserActionTypes.LOGIN_ERROR,
    props<{ payload: any}>()
);
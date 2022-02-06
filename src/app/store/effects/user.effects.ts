import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsersApiService } from "src/app/data/apis/api-movies/services/users-api.service";
import { userActionLogin, userActionLoginError, userActionLoginSucces } from "../actions/user.actions";



@Injectable()
export class UserEffects{

    constructor(
        private actions$: Actions,
        private _usersApi: UsersApiService
    ){}

    public login$(){
        return this.effect;
    }

    private effect = createEffect( () => 
        this.actions$.pipe(
            ofType(userActionLogin),
            tap((data) => console.log('UserEffects.login():', data)),
            mergeMap( (action) => 
                this._usersApi.login(action.email, action.password).pipe(
                    map( (response) => userActionLoginSucces({ user: response.data })),
                    catchError( (err) => of(userActionLoginError({ payload: err })))
                )
            )
        )
    );
}
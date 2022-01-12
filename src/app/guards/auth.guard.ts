import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsersApiService } from '../data/apis/api-movies/services/users-api.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private _usersApi: UsersApiService, private router: Router) {}

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this._usersApi.validateToken().pipe(
            tap((isLoggedIn) => {
                if (!isLoggedIn) {
                    this.router.navigateByUrl('/authentication');
                }
            })
        );
    }
}

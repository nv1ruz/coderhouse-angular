import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';
import { ITab } from 'src/app/modules/shared/tabs/tabs.component';
import { AppState } from 'src/app/store/app.reducer';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
    public tabs: ITab[] = [
        {
            id: 1,
            name: 'Login',
        },
        {
            id: 2,
            name: 'Registrar cuenta',
        },
    ];
    public tabSelected: ITab;
    private userStateSubscription: Subscription;
    private validateTokenSubscription: Subscription;

    constructor(
        private store: Store<AppState>,
        private _router: Router,
        private _usersApi: UsersApiService
    ) {
        this.userStateSubscription = this.store.select('user').subscribe((state) => {
            if (state.loggedIn) this._router.navigateByUrl('');
        });

        this.validateTokenSubscription = this._usersApi.validateToken().subscribe((isLoggedIn) => {
            if (isLoggedIn) {
                this._router.navigateByUrl('');
            }
        });
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        if (this.userStateSubscription) this.userStateSubscription.unsubscribe();
        if (this.validateTokenSubscription) this.validateTokenSubscription.unsubscribe();
    }
}

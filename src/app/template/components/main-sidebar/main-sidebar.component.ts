import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';
import { IMenuItem, MainSidebarService } from '../../services/main-sidebar.service';

@Component({
    selector: 'app-main-sidebar',
    templateUrl: './main-sidebar.component.html',
    styleUrls: ['./main-sidebar.component.css'],
    animations: [
        trigger('slide', [
            state('up', style({ height: 0 })),
            state('down', style({ height: '*' })),
            transition('up <=> down', animate(200)),
        ]),
    ],
})
export class MainSidebarComponent implements OnInit {
    constructor(public _mainSidebar: MainSidebarService, public _usersApi: UsersApiService) {}

    ngOnInit(): void {}

    public toggleMenu(menuActual: IMenuItem): void {
        if (menuActual.type === 'dropdown') {
            this._mainSidebar.menu.forEach((item) => {
                if (item === menuActual) {
                    item.active = !menuActual.active;
                } else {
                    item.active = false;
                }
            });
        }
    }

    public getStatusAnimationMenu(menuActual: IMenuItem): string {
        if (menuActual.active) {
            return 'down';
        } else {
            return 'up';
        }
    }
}

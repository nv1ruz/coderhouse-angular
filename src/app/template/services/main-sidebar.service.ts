import { Injectable } from '@angular/core';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';

export interface IMenuItem {
    title: string;
    icon: string;
    active: boolean;
    type: string;
    link?: string;
    submenus?: {
        title: string;
        icon?: string;
        link: string;
    }[];
}

@Injectable({
    providedIn: 'root',
})
export class MainSidebarService {
    private _visible: boolean = true;
    private _menuSimple: IMenuItem[] = [
        {
            title: 'General',
            type: 'header',
            active: false,
            icon: '',
        },
        {
            title: 'Inicio',
            icon: 'home',
            active: false,
            type: 'simple',
            link: 'movies',
        },
        {
            title: 'Mi carrito',
            icon: 'shopping_cart',
            active: false,
            type: 'simple',
            link: 'cart',
        },
        {
            title: 'Mis pedidos',
            icon: 'receipt',
            active: false,
            type: 'simple',
            link: 'last_carts',
        },
        {
            title: 'Mi perfil',
            icon: 'account_circle',
            active: false,
            type: 'simple',
            link: 'profile',
        },
    ];
    private _menuAdmin: IMenuItem[] = [
        {
            title: 'General',
            type: 'header',
            active: false,
            icon: '',
        },
        {
            title: 'Inicio',
            icon: 'home',
            active: false,
            type: 'simple',
            link: 'movies',
        },
        {
            title: 'Mi carrito',
            icon: 'shopping_cart',
            active: false,
            type: 'simple',
            link: 'cart',
        },
        {
            title: 'Mis pedidos',
            icon: 'receipt',
            active: false,
            type: 'simple',
            link: 'last_carts',
        },
        {
            title: 'Mi perfil',
            icon: 'account_circle',
            active: false,
            type: 'simple',
            link: 'profile',
        },
        {
            title: 'Administrador',
            type: 'header',
            active: false,
            icon: '',
        },
        {
            title: 'Películas',
            icon: 'admin_panel_settings',
            active: false,
            type: 'simple',
            link: 'admin/movies',
        },
        {
            title: 'Últimas compras',
            icon: 'admin_panel_settings',
            active: false,
            type: 'simple',
            link: 'admin/last_purchases',
        },
    ];

    constructor(private _usersApi: UsersApiService) {}

    get visible(): boolean {
        return this._visible;
    }

    get menu(): IMenuItem[] {
        return this._usersApi.user.isAdmin ? this._menuAdmin : this._menuSimple;
    }

    public checkSidebarVisibility(): void {
        const sidebarVisible = localStorage.getItem('sidebar-visible');
        this._visible = sidebarVisible == 'true' ? true : false;
    }

    public open(): void {
        this._visible = true;
        localStorage.setItem('sidebar-visible', 'true');
    }

    public close(): void {
        this._visible = false;
        localStorage.setItem('sidebar-visible', 'false');
    }
}

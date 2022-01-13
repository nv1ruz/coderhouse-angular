import { Injectable } from '@angular/core';

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
    private _menu: IMenuItem[] = [
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
            title: 'Panel admin',
            icon: 'admin_panel_settings',
            active: false,
            type: 'dropdown',
            link: 'admin',
            submenus: [
                {
                    title: 'Peliculas',
                    link: 'admin/movies',
                },
                {
                    title: 'Compras',
                    link: '2',
                },
            ],
        },
    ];

    constructor() {}

    get visible(): boolean {
        return this._visible;
    }

    get menu(): IMenuItem[] {
        return this._menu;
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

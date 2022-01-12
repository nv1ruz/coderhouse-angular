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
            link: 'principal/facturas',
        },
        {
            title: 'Mis pedidos',
            icon: 'receipt',
            active: false,
            type: 'simple',
            link: 'principal/carrito',
        },
        {
            title: 'Mi perfil',
            icon: 'account_circle',
            active: false,
            type: 'simple',
            link: 'principal/perfil',
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

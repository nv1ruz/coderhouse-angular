import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NewMovieModalService {
    private _animate: boolean;
    private _visible: boolean;

    constructor() {}

    get animate(): boolean {
        return this._animate;
    }

    get visible(): boolean {
        return this._visible;
    }

    //

    public open(): void {
        this._visible = true;
        this._animate = true;
    }

    public close(): void {
        this._animate = false;
        setTimeout(() => (this._visible = false), 200);
    }
}

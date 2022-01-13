import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class EditMovieModalService {
    private _animate: boolean;
    private _visible: boolean;
    private _movieId: string;

    constructor() {}

    get animate(): boolean {
        return this._animate;
    }

    get visible(): boolean {
        return this._visible;
    }

    get movieId(): string {
        return this._movieId;
    }

    public open(movieId: string): void {
        this._movieId = movieId;
        this._visible = true;
        this._animate = true;
    }

    public close(): void {
        this._animate = false;
        setTimeout(() => (this._visible = false), 200);
    }
}

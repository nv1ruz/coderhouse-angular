import { Injectable } from '@angular/core';
import { ICartPopulate } from 'src/app/data/apis/api-movies/interfaces/carts-api.interface';

@Injectable({
    providedIn: 'root',
})
export class PurchaseDetailsModalService {
    private _animate: boolean;
    private _visible: boolean;
    private _cart: ICartPopulate;

    constructor() {}

    get animate(): boolean {
        return this._animate;
    }

    get visible(): boolean {
        return this._visible;
    }

    get cart(): ICartPopulate {
        return this._cart;
    }

    public open(cart: ICartPopulate): void {
        this._cart = cart;
        this._visible = true;
        this._animate = true;
    }

    public close(): void {
        this._animate = false;
        setTimeout(() => (this._visible = false), 200);
    }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartsApiService } from 'src/app/data/apis/api-movies/services/carts-api.service';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';
import { ToastNotificationService } from 'src/app/modules/shared/toast-notification/toast-notification.service';
import { cartActionDeleteCart } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import Swal from 'sweetalert2';

export interface IProductCart {
    id: string;
    title: string;
    price: number;
}

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private _products: IProductCart[] = [];

    constructor(
        private store: Store<AppState>,
        private _usersApi: UsersApiService,
        private _cartsApi: CartsApiService,
        private _toastNotification: ToastNotificationService
    ) {}

    get products() {
        return this._products;
    }

    get amountTotal(): number {
        return this._products.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);
    }

    public addProduct(id: string, title: string, price: number): void {
        if (this.existProduct(id)) return;

        this._products.push({
            id: id,
            title: title,
            price: price,
        });
        this._toastNotification.showNotification({
            title: 'Éxito!',
            message: 'Película agregada al carrito',
            type: 'success',
            timeout: 4000,
        });
    }

    public existProduct(id: string): boolean {
        return this._products.find((item) => item.id == id) ? true : false;
    }

    public deleteProduct(id: string): void {
        if (!this.existProduct(id)) return;

        this._products = this._products.filter((item) => item.id !== id);
        this._toastNotification.showNotification({
            title: 'Éxito!',
            message: 'Película eliminada del carrito',
            type: 'success',
            timeout: 4000,
        });
    }

    public deleteAllProduct(): void {
        this._products = [];
        Swal.fire('Carrito vacio', 'Los productos se quitaron con éxito', 'success');
    }

    public buy(): void {
        const data: {
            user: string;
            cart: {
                product: string;
                price: number;
            }[];
        } = {
            user: this._usersApi.user.id,
            cart: [],
        };

        for (const item of this._products) {
            data.cart.push({
                product: item.id,
                price: item.price,
            });
        }

        const subscription = this._cartsApi.addCart(data).subscribe((response) => {
            if (response.ok) {
                this.store.dispatch(cartActionDeleteCart());
                this.deleteAllProduct();
            }
            Swal.fire('Compra realizada', 'La compra se realizó con éxito', 'success');
            // this._toastNotification.showNotification({
            //     title: 'Éxito!',
            //     message: 'La compra se realizó correctamente',
            //     type: 'success',
            //     timeout: 7000,
            // });
            if (subscription) subscription.unsubscribe();
        });
    }
}

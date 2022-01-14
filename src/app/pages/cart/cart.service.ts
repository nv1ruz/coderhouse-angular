import { Injectable } from '@angular/core';
import { CartsApiService } from 'src/app/data/apis/api-movies/services/carts-api.service';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';

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

    constructor(private _usersApi: UsersApiService, private _cartsApi: CartsApiService) {}

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
        console.log(this._products);
    }

    public existProduct(id: string): boolean {
        return this._products.find((item) => item.id == id) ? true : false;
    }

    public deleteProduct(id: string): void {
        if (!this.existProduct(id)) return;

        this._products = this._products.filter((item) => item.id !== id);
        console.log(this._products);
    }

    public deleteAllProduct(): void {
        this._products = [];
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

        console.log(data);
        const subscription = this._cartsApi.addCart(data).subscribe((response) => {
            console.log(response);
            if (response.ok) this.deleteAllProduct();
            if (subscription) subscription.unsubscribe();
        });
    }
}

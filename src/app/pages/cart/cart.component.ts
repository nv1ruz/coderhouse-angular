import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { cartActionDeleteCart, cartActionDeleteProduct } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';
import { CartService, IProductCart } from './cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    public products: IProductCart[] = [];
    private cartStateSubscription: Subscription;

    constructor(private store: Store<AppState>, public _cart: CartService) {}

    ngOnInit(): void {
        this.cartStateSubscription = this.store.select('cart').subscribe((response) => {
            this.products = [...response.cart];
        });
    }

    ngOnDestroy(): void {
        if (this.cartStateSubscription) this.cartStateSubscription.unsubscribe();
    }

    public deleteMovie(movieId: string): void {
        this.store.dispatch(cartActionDeleteProduct({ id: movieId }));
        this._cart.deleteProduct(movieId);
    }

    public deleteCart(): void {
        this.store.dispatch(cartActionDeleteCart());
        this._cart.deleteAllProduct();
    }
}

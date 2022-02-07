import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICartPopulate } from 'src/app/data/apis/api-movies/interfaces/carts-api.interface';
import { CartsApiService } from 'src/app/data/apis/api-movies/services/carts-api.service';
import { UsersApiService } from 'src/app/data/apis/api-movies/services/users-api.service';

@Component({
    selector: 'app-last-carts',
    templateUrl: './last-carts.component.html',
    styleUrls: ['./last-carts.component.css'],
})
export class LastCartsComponent implements OnInit {
    public carts: ICartPopulate[] = [];
    public cartsSubscription: Subscription;

    constructor(private _cartsApi: CartsApiService, private _usersApi: UsersApiService) {}

    ngOnInit(): void {
        this.loadLastCarts();
    }

    ngOnDestroy(): void {
        if (this.cartsSubscription) this.cartsSubscription.unsubscribe();
    }

    private loadLastCarts(): void {
        const userId: string = this._usersApi.user.id;
        this.cartsSubscription = this._cartsApi
            .getLastCartsByUserId(userId)
            .subscribe((response) => {
                if (response.ok) this.carts = response.data;
            });
    }

    public amountTotal(index: number): number {
        return this.carts[index].cart
            .map((item) => item.price)
            .reduce((prev, curr) => prev + curr, 0);
    }
}

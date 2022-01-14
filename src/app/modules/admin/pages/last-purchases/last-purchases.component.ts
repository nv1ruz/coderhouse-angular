import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICartPopulate } from 'src/app/data/apis/api-movies/interfaces/carts-api.interface';
import { CartsApiService } from 'src/app/data/apis/api-movies/services/carts-api.service';

@Component({
    selector: 'app-last-purchases',
    templateUrl: './last-purchases.component.html',
    styleUrls: ['./last-purchases.component.css'],
})
export class LastPurchasesComponent implements OnInit {
    public carts: ICartPopulate[] = [];
    public cartsSubscription: Subscription;

    constructor(private _cartsApi: CartsApiService) {}

    ngOnInit(): void {
        this.loadLastCarts();
    }

    ngOnDestroy(): void {
        if (this.cartsSubscription) this.cartsSubscription.unsubscribe();
    }

    private loadLastCarts(): void {
        this.cartsSubscription = this._cartsApi.getLastCarts().subscribe((response) => {
            console.log(response);
            if (response.ok) this.carts = response.data;
        });
    }

    public amountTotal(index: number): number {
        return this.carts[index].cart
            .map((item) => item.price)
            .reduce((prev, curr) => prev + curr, 0);
    }
}

import { Component, OnInit } from '@angular/core';
import { PurchaseDetailsModalService } from '../../services/purchase-details-modal.service';

@Component({
    selector: 'app-purchase-details-modal',
    templateUrl: './purchase-details-modal.component.html',
    styleUrls: ['./purchase-details-modal.component.css'],
})
export class PurchaseDetailsModalComponent implements OnInit {
    constructor(public _purchaseDetailsModal: PurchaseDetailsModalService) {}

    ngOnInit(): void {}

    public amountTotal(): number {
        return this._purchaseDetailsModal.cart.cart
            .map((item) => item.price)
            .reduce((prev, curr) => prev + curr, 0);
    }
}

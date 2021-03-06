import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CrudMoviesComponent } from './pages/crud-movies/crud-movies.component';
import { NewMovieModalComponent } from './components/new-movie-modal/new-movie-modal.component';
import { EditMovieModalComponent } from './components/edit-movie-modal/edit-movie-modal.component';
import { LastPurchasesComponent } from './pages/last-purchases/last-purchases.component';
import { PurchaseDetailsModalComponent } from './components/purchase-details-modal/purchase-details-modal.component';

@NgModule({
    declarations: [CrudMoviesComponent, NewMovieModalComponent, EditMovieModalComponent, LastPurchasesComponent, PurchaseDetailsModalComponent],
    imports: [CommonModule, AdminRoutingModule, SharedModule, ReactiveFormsModule],
})
export class AdminModule {}

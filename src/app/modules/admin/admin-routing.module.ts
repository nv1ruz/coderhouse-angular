import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudMoviesComponent } from './pages/crud-movies/crud-movies.component';
import { LastPurchasesComponent } from './pages/last-purchases/last-purchases.component';

const routes: Routes = [
    {
        path: 'movies',
        component: CrudMoviesComponent,
    },
    {
        path: 'last_purchases',
        component: LastPurchasesComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'movies' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}

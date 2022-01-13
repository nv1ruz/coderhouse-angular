import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudMoviesComponent } from './pages/crud-movies/crud-movies.component';

const routes: Routes = [
    {
        path: 'movies',
        component: CrudMoviesComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'movies' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}

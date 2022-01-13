import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesListComponent,
    },
    {
        path: ':movieId',
        component: MovieDetailComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MoviesRoutingModule {}

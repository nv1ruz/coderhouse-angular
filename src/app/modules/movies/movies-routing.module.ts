import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

const routes: Routes = [
    {
        path: 'list',
        component: MoviesListComponent,
    },
    {
        path: 'list/:movieId',
        component: MovieDetailComponent,
    },
    { path: '', pathMatch: 'full', redirectTo: 'list' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MoviesRoutingModule {}

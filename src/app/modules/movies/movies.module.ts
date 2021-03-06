import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';

@NgModule({
    declarations: [MoviesListComponent, MovieDetailComponent],
    imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}

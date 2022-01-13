import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CrudMoviesComponent } from './pages/crud-movies/crud-movies.component';
import { NewMovieModalComponent } from './components/new-movie-modal/new-movie-modal.component';
import { EditMovieModalComponent } from './components/edit-movie-modal/edit-movie-modal.component';

@NgModule({
    declarations: [CrudMoviesComponent, NewMovieModalComponent, EditMovieModalComponent],
    imports: [CommonModule, AdminRoutingModule, SharedModule, ReactiveFormsModule],
})
export class AdminModule {}

import { Component, OnInit } from '@angular/core';
import { CrudMoviesService } from '../../services/crud-movies.service';
import { EditMovieModalService } from '../../services/edit-movie-modal.service';
import { NewMovieModalService } from '../../services/new-movie-modal.service';

@Component({
    selector: 'app-crud-movies',
    templateUrl: './crud-movies.component.html',
    styleUrls: ['./crud-movies.component.css'],
})
export class CrudMoviesComponent implements OnInit {
    constructor(
        public _newMovieModal: NewMovieModalService,
        public _editMovieModal: EditMovieModalService,
        public _crudMovies: CrudMoviesService
    ) {}

    ngOnInit(): void {
        this._crudMovies.loadMovies();
    }
}

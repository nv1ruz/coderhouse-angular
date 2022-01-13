import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
    private movieId: string = '';
    public movie: IMovie;
    private paramSubscription: Subscription;
    private movieSubscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _moviesApi: MoviesApiService
    ) {}

    ngOnInit(): void {
        this.getParam();
    }

    ngOnDestroy(): void {
        if (this.paramSubscription) this.paramSubscription.unsubscribe();
        if (this.movieSubscription) this.movieSubscription.unsubscribe();
    }

    private getParam(): void {
        this.paramSubscription = this.route.paramMap.subscribe((params: ParamMap) => {
            this.movieId = params.get('movieId');
            this.loadMovie();
        });
    }

    private loadMovie(): void {
        this.movieSubscription = this._moviesApi
            .getMovieById(this.movieId)
            .subscribe((response) => {
                console.log(response);
                if (response.ok) this.movie = response.data;
            });
    }

    public goBack(): void {
        this.router.navigateByUrl('movies');
    }
}

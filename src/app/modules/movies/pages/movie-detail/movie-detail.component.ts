import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';
import { CartService } from 'src/app/pages/cart/cart.service';
import { loadMovie } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

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
        private store: Store<AppState>,
        private route: ActivatedRoute,
        private router: Router,
        private _moviesApi: MoviesApiService,
        private _cart: CartService
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
        this.store.select('movie').subscribe((response) => {
            this.movie = response.movie;
        });

        this.store.dispatch(loadMovie({ id: this.movieId }));
        // this.movieSubscription = this._moviesApi
        //     .getMovieById(this.movieId)
        //     .subscribe((response) => {
        //         console.log(response);
        //         if (response.ok) this.movie = response.data;
        //     });
    }

    public goBack(): void {
        this.router.navigateByUrl('movies');
    }

    public addMovie(movie: IMovie): void {
        this._cart.addProduct(movie.id, movie.title, movie.price);
    }

    public deleteMovie(movieId: string): void {
        this._cart.deleteProduct(movieId);
    }

    public existMovieInCart(movieId: string): boolean {
        return this._cart.existProduct(movieId);
    }
}

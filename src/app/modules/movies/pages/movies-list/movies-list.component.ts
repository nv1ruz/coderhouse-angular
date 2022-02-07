import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IMovie } from 'src/app/data/apis/api-movies/interfaces/movies-api.interface';
import { MoviesApiService } from 'src/app/data/apis/api-movies/services/movies-api.service';
import { CartService } from 'src/app/pages/cart/cart.service';
import { cartActionAddProduct, cartActionDeleteProduct } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
    private moviesSubscription: Subscription;
    public movies: IMovie[] = [];

    constructor(
        private store: Store<AppState>,
        private _moviesApi: MoviesApiService,
        private router: Router,
        private _cart: CartService
    ) {}

    ngOnInit(): void {
        this.loadMovies();
    }

    ngOnDestroy(): void {
        if (this.moviesSubscription) this.moviesSubscription.unsubscribe();
    }

    public loadMovies(): void {
        this.moviesSubscription = this._moviesApi.getMovies().subscribe((response) => {
            // console.log(response);
            if (response.ok) this.movies = response.data;
        });
    }

    public goToDetail(movieId: string): void {
        this.router.navigateByUrl(`/movies/${movieId}`);
    }

    public addMovie(movie: IMovie): void {
        this.store.dispatch(
            cartActionAddProduct({ id: movie.id, title: movie.title, price: movie.price })
        );
        this._cart.addProduct(movie.id, movie.title, movie.price);
    }

    public deleteMovie(movieId: string): void {
        this.store.dispatch(cartActionDeleteProduct({ id: movieId }));
        this._cart.deleteProduct(movieId);
    }

    public existMovieInCart(movieId: string): boolean {
        return this._cart.existProduct(movieId);
    }
}

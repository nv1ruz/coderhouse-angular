export interface IMoviesResponse {
    ok: boolean;
    message: string;
    data?: IMovie[];
    path?: string;
    method?: string;
}

export interface IMovieResponse {
    ok: boolean;
    message: string;
    data?: IMovie;
    path?: string;
    method?: string;
}

export interface IMovie {
    id?: string;
    title: string;
    description: string;
    genred: string;
    year: number;
    price: number;
    stock: number;
    stockMin: number;
    image: string;
    isEnabled: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

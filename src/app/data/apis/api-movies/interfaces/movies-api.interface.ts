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

export interface IMovieInsertResponse {
    ok: boolean;
    message: string;
    data?: IMovie;
    path?: string;
    method?: string;
}

export interface IMovieInsertData {
    title: string;
    description: string;
    genred: string;
    year: number;
    price: number;
    stock: number;
    stockMin: number;
    image: string;
    isEnabled: boolean;
}
export interface IMovieUpdateResponse {
    ok: boolean;
    message: string;
    data?: { updated: boolean };
    path?: string;
    method?: string;
}

export interface IMovieUpdateData {
    title: string;
    description: string;
    genred: string;
    year: number;
    price: number;
    stock: number;
    stockMin: number;
    image: string;
    isEnabled: boolean;
}

export interface IMovieDeleteResponse {
    ok: boolean;
    message: string;
    data?: { deleted: boolean };
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

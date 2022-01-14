import { IMovie } from './movies-api.interface';
import { IUser } from './users-api.interface';

export interface ICartInsertResponse {
    ok: boolean;
    message: string;
    data?: ICart;
    path?: string;
    method?: string;
}

export interface ICartInsertData {
    user: string;
    cart: {
        product: string;
        price: number;
    }[];
}

export interface ICart {
    id: string;
    user: string;
    cart: {
        _id?: string;
        product: string;
        price: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ICartsByUserResponse {
    ok: boolean;
    message: string;
    data?: ICartPopulate[];
    path?: string;
    method?: string;
}

export interface ICartsLastResponse {
    ok: boolean;
    message: string;
    data?: ICartPopulate[];
    path?: string;
    method?: string;
}

export interface ICartPopulate {
    id: string;
    user: IUser;
    cart: {
        _id?: string;
        product: IMovie;
        price: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

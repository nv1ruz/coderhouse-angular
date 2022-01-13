export interface ICartInsertResponse {
    ok: boolean;
    message: string;
    data?: ICart;
    path?: string;
    method?: string;
}

export interface ICartInsertData {
    userId: string;
    cart: {
        productId: string;
        price: number;
    }[];
}

export interface ICart {
    id: string;
    userId: string;
    cart: {
        _id?: string;
        productId: string;
        price: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

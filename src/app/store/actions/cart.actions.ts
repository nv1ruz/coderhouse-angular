import { createAction, props } from "@ngrx/store";



export enum CartActionTypes {
    ADD_PRODUCT = '[CART] ADD_PRODUCT',
    DELETE_PRODUCT = '[CART] DELETE_PRODUCT',
    DELETE_CART = '[CART] DELETE_CART'
}

// methods

export const cartActionAddProduct = createAction(
    CartActionTypes.ADD_PRODUCT,
    props<{ id: string; title: string; price: number}>()
);

export const cartActionDeleteProduct = createAction(
    CartActionTypes.DELETE_PRODUCT,
    props<{ id: string }>()
);

export const cartActionDeleteCart = createAction(
    CartActionTypes.DELETE_CART
);
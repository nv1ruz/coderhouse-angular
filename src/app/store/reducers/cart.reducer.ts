import { Action } from "@ngrx/store";
import { IProductCart } from "src/app/pages/cart/cart.service";
import { CartActionTypes } from "../actions";



export interface ICartState{
    cart: IProductCart[];
}

export const initialState: ICartState = {
    cart: []
}

// methods

export function cartReducer(
    state: ICartState = initialState,
    action: any
): ICartState {

    switch (action.type){
        case CartActionTypes.ADD_PRODUCT:
            var cart = [...state.cart];
            var exist = cart.find((item) => item.id == action.id) ? true : false;
            if(!exist) cart.push({id: action.id, title: action.title, price: action.price});
            return {
                ...state,
                cart: cart
            };

        case CartActionTypes.DELETE_PRODUCT:
            var cart = [...state.cart];
            var exist = cart.find((item) => item.id == action.id) ? true : false;
            if(exist) cart = cart.filter((item) => item.id !== action.id);
            return {
                ...state,
                cart: cart
            };

        case CartActionTypes.DELETE_CART:
            return {
                ...state,
                cart: []
            };

        default:
            return state
    }
}
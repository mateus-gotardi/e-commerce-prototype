import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        items: CartItem[]
    }
}
export type Product = {
    imageURL: string,
    name: string,
    description?: string,
    rating: string,
    price: string,
    temperature?: string,
}
export interface CartItem extends Product {
    quantity: number
}
const initialState = {
    value: {
        items: [],
    }
} as InitialState

export const cart = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItem>) => {
            const index = state.value.items.findIndex(item => item.name === action.payload.name)
            if (index !== -1) {
                state.value.items[index].quantity += 1
                return
            } else {
                state.value.items.push(action.payload)
            }
        },
        remove: (state, action: PayloadAction<CartItem>) => {
            const index = state.value.items.findIndex(item => item.name === action.payload.name)
            if (index !== -1 && state.value.items[index].quantity > 1) {
                state.value.items[index].quantity -= 1
                return
            } else {
                state.value.items = state.value.items.filter(item => item.name !== action.payload.name)
            }
        },
        removeAll: () => {
            return initialState
        },
    }
})
export const { add, remove, removeAll } = cart.actions
export default cart.reducer
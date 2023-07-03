import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        items: Product[]
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
const initialState = {
    value: {
        items: [],
    }
} as InitialState

export const cart = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<Product>) => {
            state.value.items.push(action.payload)
        },
        remove: (state, action: PayloadAction<Product>) => {
            state.value.items = state.value.items.filter(item => item.name !== action.payload.name)
        },
        removeAll: () => {
            return initialState
        },
    }
})
export const { add, remove, removeAll } = cart.actions
export default cart.reducer
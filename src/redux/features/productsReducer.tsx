import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './cartReducer';

type InitialState = {
    value: {
        products: Product[]
    }
}

const initialState = {
    value: {
        products: [],
    }
} as InitialState

export const products = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        register: (state, action: PayloadAction<Product[]>) => {
            state.value.products = action.payload
        }
    }
})

export const { register } = products.actions
export default products.reducer
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartReducer'
import productsReducer from './features/productsReducer'
import searchReducer from './features/search'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        cartReducer,
        productsReducer,
        searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector
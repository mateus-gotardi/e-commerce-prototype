import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: {
        search: string
    }
}
export type Search = {
    search: string
}
const initialState = {
    value: {
        search: '',
    }
} as InitialState

export const search = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        changeValue: (state, action: PayloadAction<Search>) => {
            state.value.search = action.payload.search
        }
    }
})
export const { changeValue } = search.actions
export default search.reducer
import { createSlice } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        page: 1,
        searchString: ""
    },
    reducers: {
        nextPage: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.page += 1
        },
        previousPage: (state) => {
            state.page -= 1;
        },
        setPage: (state, action) => {
            state.page += action.payload.page;
        },
        setSearch: (state, action) => {
            state.searchString = action.payload.searchString;
        },
        clearSearch: (state) => {
            state.searchString = "";
        }
    },
})

export const { nextPage, previousPage, setPage, setSearch, clearSearch } = paginationSlice.actions;
export default paginationSlice.reducer;


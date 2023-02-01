
import { createSlice } from '@reduxjs/toolkit'

import { HYDRATE } from "next-redux-wrapper";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: ""
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
            ...state,
            ...action.payload.user,
            };
        },
    }
})

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions


export default userSlice.reducer
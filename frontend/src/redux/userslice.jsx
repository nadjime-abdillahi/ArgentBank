import { createSlice } from "@reduxjs/toolkit";

// slice
const initialState = {};
export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (currentState, action) => {
            return {...currentState, ...action.payload};
        },
        clearUser: () => {
            return initialState;
        } 
    },
});

// selectors
export const getUser = (state) => state?.user;
export const isLoggedIn = (state) => state?.user?.id ? true : false;
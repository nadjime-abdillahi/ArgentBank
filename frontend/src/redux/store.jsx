import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { fetchStatusSlice } from "./fetchStatusSlice";

export const initialState = {
    user: userSlice.getInitialState(),
    fetchStatus: fetchStatusSlice.getInitialState(),
}

export const store = configureStore({
    reducer: combineReducers({
        user: userSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
    }),
});
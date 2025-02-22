import { createSlice } from "@reduxjs/toolkit";


// slice definition
const createFetchStatus = (id) => {
    return {
        id: id,
        error: false,
        errorMessage: "",
        success : false,
        loading : false,
    }
}
const initialState = [];
export const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: initialState,
    reducers: {
        // create a fetchStatus element with a specified ID
        // don't duplicate elements if the ID already exists
        initStatus: (currentState, action) => {
            const currentFilteredState = currentState.filter((status) => status.id !== action.payload);
            const status = createFetchStatus(action.payload);
            return [...currentFilteredState,status];
        },
        // delete the fetchStatus element with the specified ID
        clearStatus: (currentState, action) => {
            const currentFilteredState = currentState.filter((status) => status.id !== action.payload);
            return [...currentFilteredState];
        },
        // set a fetchStatus (with a specified ID) to error
        setError: (currentState, action) => {
            const currentFilteredState = currentState.filter((status) => status.id !== action.payload.id);
            return [...currentFilteredState, {
                id: action.payload.id,
                error: true,
                errorMessage: action.payload.errorMessage,
                success: false,
                loading: false,
            }];
        },
        // set a fetchStatus (with a specified ID) to success
        setSuccess: (currentState, action) => {
            const currentFilteredState = currentState.filter((status) => status.id !== action.payload.id);
            return [...currentFilteredState, {
                id: action.payload.id,
                error: false,
                errorMessage: "",
                success: true,
                loading: false,
            }];
        },
        // set a fetchStatus (with a specified ID) to loading
        setLoading: (currentState, action) => {
            const currentFilteredState = currentState.filter((status) => status.id !== action.payload.id);
            return [...currentFilteredState, {
                id: action.payload.id,
                error: false,
                errorMessage: "",
                success: false,
                loading: true,
            }];
        },
    },
});

// selectors : retrieve the fetchStatus element with a specified ID
export const getFetchStatus = (id) => (state)=> state.fetchStatus.find((fetchStatus) => fetchStatus.id === id);
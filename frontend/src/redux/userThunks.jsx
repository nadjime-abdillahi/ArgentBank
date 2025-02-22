import { fetchStatusSlice } from "./fetchStatusSlice";
import { userSlice } from "./userSlice";

export const userLogInThunk = (payload) => {
    return async (dispatch) => {
        fetch('http://localhost:3001/api/v1/user/login',{
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(payload),
        })
        .then((response) => {
            if(response.status===200) {
                return response.json();
            } else {
                return response.json().then((errorResponse) => {
                    throw new Error(errorResponse.message);
                });
            }
        })
        .then((data) => {
            // The token is saved in the Redux store (user slice)
            dispatch(userSlice.actions.setUser({token: data.body.token}));
            // dispatch a thunk to retrieve the entire user data using the token
            dispatch(getUserProfileThunk({idFetchStatus: payload.idFetchStatus,token:data.body.token,}));
            // enable automatic reconnection by storing the Token in localStorage
            if(payload.rememberMe) { localStorage.setItem("token",data.body.token); }
        })
        .catch((errorMessage) => {
            // the error is transmitted to the fetStatus element in the Redux store
            dispatch(fetchStatusSlice.actions.setError({id:payload.idFetchStatus,errorMessage:errorMessage.message,}));
        });
    };
};

export const getUserProfileThunk = ({idFetchStatus,token}) => {
    return async (dispatch) => {
        fetch("http://localhost:3001/api/v1/user/profile",{
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
        }).then((response) => {
            if(response.status === 200) {return response.json() }
            else {
                return response.json().then((errorResponse) => {
                    throw new Error(errorResponse.message);
                });
            }
        })
        .then((data) => {
            // Save the user data in the Redux store
            dispatch(userSlice.actions.setUser(data.body));
            // Switch the fetch state in the redux store to success
            dispatch(fetchStatusSlice.actions.setSuccess({id:idFetchStatus}));
        })
        .catch((errorMessage) => {
            // the error is transmitted to the fetStatus element in the Redux store
            dispatch(fetchStatusSlice.actions.setError({id:idFetchStatus, errorMessage:errorMessage.message}));
        });
    };
};

export const updateUserNameThunk = (payload) => {
    return async (dispatch) => {
        fetch('http://localhost:3001/api/v1/user/profile',{
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${payload.token}`,
            },
            body: JSON.stringify({userName:payload.userName}),
        })
        .then((response) => {
            if(response.status===200) {
                // Save the updated user data in the Redux store
                dispatch(userSlice.actions.setUser({userName: payload.userName}));
                // Switch the fetch state in the redux store to success
                dispatch(fetchStatusSlice.actions.setSuccess({id:payload.idFetchStatus}));
            } else {
                return response.json().then((errorResponse) => {
                    throw new Error(errorResponse.message);
                });
            }
        })
        .catch((errorMessage) => {
            // the error is transmitted to the fetStatus element in the Redux store
            dispatch(fetchStatusSlice.actions.setError({id:payload.idFetchStatus, errorMessage:errorMessage.message}));
        });
    }
}
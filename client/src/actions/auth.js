import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';
import { setAlert } from './alert'
import setAuthToken from '../utils/setAuthToken'


// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Regiter user
export const signup = ({ name, email, password }) => async dispathch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password });
    try {
        const res = await axios.post('api/users', body, config);

        dispathch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispathch(loadUser());

    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispathch(setAlert(error.msg, 'danger')));
        }
        dispathch({
            type: REGISTER_FAIL
        });
    }
}

// Login user
export const login = ({ email, password }) => async dispathch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password });

    try {
        console.log(body)
        const res = await axios.post('api/auth', body, config);

        dispathch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispathch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispathch(setAlert(error.msg, 'danger')));
        }
        dispathch({
            type: LOGIN_FAIL
        });
    }
}

// Logout
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
  };
import { GET_ORDERS, ADD_ORDER, DELETE_ORDER, ORDERS_LOADING } from './types'
import axios from "axios";

export const getOder = () => dispathch => {
    axios.get('/api/order')
        .then(res => dispathch({
            type: GET_ORDERS,
            payload: res.data
        }))
       
}

export const addOrder = Order => dispathch => {
    axios.post('/api/order',Order)
        .then(res => dispathch({
            type: ADD_ORDER,
            payload: res.data
        }))
       
}
export const deleteOrder = () => dispathch => {
    axios.put('/api/order')
        .then(res => dispathch({
            type: DELETE_ORDER,
            payload: res.data
        }))
       
}
export const setOrdersLoading = () => {
    return {
        type: ORDERS_LOADING
    };
};
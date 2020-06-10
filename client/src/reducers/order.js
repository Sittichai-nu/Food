import { GET_ORDERS, ADD_ORDER, DELETE_ORDER, ORDERS_LOADING } from '../actions/types'
const initialState = {
    items: [],
    loading : false
  };
  export default function (state = initialState, action) {
    switch(action.type){
      case GET_ORDERS: 
      return {
        ...state,
        items : action.payload,
        loading: false
      };
      case DELETE_ORDER: 
      return {
        ...state,
        items : state.items.filter(item => item._id !== action.payload)
      };
      case ADD_ORDER: 
      return {
        ...state,
        items : [action.payload,...state.items]
      };
      case ORDERS_LOADING: 
      return {
        ...state,
        loading: true
      };
      default : 
      return state;
    }
  }
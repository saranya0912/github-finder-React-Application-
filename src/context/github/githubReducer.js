import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING
} from '../types';
import { Switch } from 'react-router-dom';
export default (state,action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return{
                ...state,
                user: action.payload,
                loading:false
            };
        case SET_LOADING:
            return {
                ...state,
                loading:true
            };
        default:
            return state;

    }
}
import { LOGIN, } from '../types/index'

export const signin = payload => {
    return {
        type: LOGIN,
        payload: payload
    }
};




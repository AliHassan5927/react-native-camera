import { ACCOUNTTYPE, LOGIN, LOGOUT, SIGNUP } from '../types/index'

export const signin = payload => {
    return {
        type: LOGIN,
        payload: payload
    }
};
export const logout = () => {
    return {
        type: LOGOUT,
        payload: { uid: '' }
    }
};
export const signup = payload => {
    return {
        type: SIGNUP,
        payload: payload
    }
}
export const set_account_type = payload => {
    return {
        type: ACCOUNTTYPE,
        payload: payload
    }
}


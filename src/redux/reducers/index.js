import { ACCOUNTTYPE, LOGIN, LOGOUT, SIGNUP } from '../types/index'
const intialState = {
    user: {},
    logged_in: false,
    account_type: '',
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                user: action.payload,
                logged_in: true,
                date: new Date()
            }
        }
        case SIGNUP: {
            return {
                ...state,
                user: action.payload,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                user: {},
                logged_in: false
            }
        }
        case ACCOUNTTYPE: {
            return {
                ...state,
                account_type: action.payload,
            }
        }
        default:
            return state
    }
}
export default reducer;
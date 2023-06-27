import { LOGIN } from '../types/index'
const intialState = {
    user: {},
    logged_in: false,
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

        default:
            return state
    }
}
export default reducer;
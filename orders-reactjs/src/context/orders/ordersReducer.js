import { FETCH_ORDERS } from "../../types";

const ordersReducer = (state, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state
    }
}

export default ordersReducer;
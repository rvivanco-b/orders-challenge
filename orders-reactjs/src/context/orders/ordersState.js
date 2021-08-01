import { useReducer } from "react"
import ordersContext from "./ordersContext"
import ordersReducer from "./ordersReducer"
import axiosClient from "../../config/axios"
import { FETCH_ORDERS } from "../../types"

const OrdersState = ({children}) => {
    const initialState = {
        orders: []
    }

    const [state, dispatch] = useReducer(ordersReducer, initialState)

    const fetchOrders = async () => {
        try {
            const { data } = await axiosClient.get('/orders')
            dispatch({
                type: FETCH_ORDERS,
                payload: data
            })
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <ordersContext.Provider
            value={{
                orders: state.orders
            }}
        >
            {children}
        </ordersContext.Provider>
    )
}

export default OrdersState
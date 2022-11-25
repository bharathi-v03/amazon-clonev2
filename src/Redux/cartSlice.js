import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    user: null,
};

// requires a string name to identify the slice = "cart",
// inititalState,
// one or more reducer functions to define how the state can be updated
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
            console.log(state.cart)
        },
        removeFromCart: (state, action) => {
            state.cart = [...state.cart]
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.payload.id);
            if (index >= 0) {
                state.cart.splice(index, 1)
            }
            console.log(state.cart)
        },
        updateUser: (state, action) => {
            state.user = action.payload
            console.log(state.user)
        }
    }
})

// export the generated Redux action creators and the reducer function for the whole slice
export const { addToCart, removeFromCart, updateUser } = cartSlice.actions
export default cartSlice.reducer
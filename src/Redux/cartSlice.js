import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    user: null,
};

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

export const { addToCart, removeFromCart, updateUser } = cartSlice.actions

export default cartSlice.reducer
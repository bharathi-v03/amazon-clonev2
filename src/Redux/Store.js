import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js'

// create store using configureStore
// import the reducer function from the cartslice and add it to our store
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
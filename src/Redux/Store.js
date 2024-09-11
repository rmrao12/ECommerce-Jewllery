import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./StoreAPIs.jsx";

const store = configureStore({
    reducer:{
        post:postReducer,
        }
})

export default store;
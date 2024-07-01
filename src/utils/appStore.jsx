import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const appStore = configureStore({
    //configure slice with store
    reducer :{
        user: userReducer,
    },
})

export default appStore;
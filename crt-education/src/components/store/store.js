import { configureStore } from "@reduxjs/toolkit";

import app from "../app/appSlice";

// Добавил redux/toolkit в проет для удобства работы со стейтом.
const store = configureStore({
    reducer: {
        app
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
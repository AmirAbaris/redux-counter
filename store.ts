import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { counterSlice } from "./countSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
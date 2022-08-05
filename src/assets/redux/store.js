
import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import pageReducer from "./slice"

// const middleware = getDefaultMiddleware({
//     serializableCheck: false
// })

export const store = configureStore({
    reducer: {
        page: pageReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
    // middleware: gedefault
})
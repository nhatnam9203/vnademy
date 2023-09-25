import { configureStore } from '@reduxjs/toolkit';
import { giftSliceReducer } from "./slices";

const rootReducer = {
    giftSliceReducer
};


const store = configureStore({
    reducer: rootReducer,
});

export default store;
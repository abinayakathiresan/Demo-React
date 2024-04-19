import { configureStore } from "@reduxjs/toolkit";
import feesReducer from "./Slice/feesSlice";

export const store = configureStore({
    reducer: {
        fees: feesReducer,
    },
}
)
import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from "./employees/slice";
import jobReducer from "./jobs/slice";

export const store = configureStore({
    reducer: {
        employees: employeeReducer,
        jobs: jobReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

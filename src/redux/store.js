import { configureStore } from "@reduxjs/toolkit";
import  notesReduser  from "./notesSlice";

export const store = configureStore({
    reducer: {
        notes: notesReduser
    }
})
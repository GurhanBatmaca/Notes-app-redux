import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes : [
            {
                id: 1,
                title: "Note 1",
                note: "React öğren",
                color: "#fff"
            },
            {
                id: 2,
                title: "Note 2",
                note: "ASP.net öğren",
                color: "#e7e013"
            }
        ]
    },
    reducers: {
        addNote: (state,action) => {
            state.notes.push(action.payload);
        }

    }
})

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;

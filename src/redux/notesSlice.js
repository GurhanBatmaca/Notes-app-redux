import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        noteList : localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
        search: ""       
    },
    reducers: {
        addNote: (state,action) => {
            state.noteList.push(action.payload);
            localStorage.setItem("notes", JSON.stringify(state.noteList));
        },
        searchNote: (state,action) => {
            state.search = action.payload;
        },
        deleteNote: (state,action) => {
            state.noteList = state.noteList.filter((note) => {
                return note.id !== action.payload;
            })
            localStorage.setItem("notes", JSON.stringify(state.noteList));
        }
    }
})

export const { addNote,searchNote,deleteNote } = notesSlice.actions;

export default notesSlice.reducer;

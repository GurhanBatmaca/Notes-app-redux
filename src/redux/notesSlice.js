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
        ],
        filteredNotes: [
        ],
        search: ""
        
    },
    reducers: {
        addNote: (state,action) => {
            state.notes.push(action.payload);
            state.filteredNotes = [...state.notes]
        },
        searchNote: (state,action) => {
            if(action.payload === "") {
                state.filteredNotes = state.notes;
            }
            state.filteredNotes = state.notes.filter((note) => {
                if(note.note.includes(action.payload)) {
                    return note;
                }else {
                    
                }
            })
        }

    }
})

export const getFilteredList = (state) => {
    if(state.search === "") {
        return state.notes
    } else {
        return state.notes.notes.filter((note) => {
            note.note == state.notes.search
        })
    }
}

export const { addNote,searchNote } = notesSlice.actions;

export default notesSlice.reducer;

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchNote } from "../redux/notesSlice";

const Search = () => {
  const dispatch = useDispatch();
  // const [search, setSearch] = useState("")
  //   const  noteList = useSelector(state => state.notes.notes);
  //   const filteredList = noteList.filter((note) => {
  //     if(note.note.includes()) {
  //         return note;
  //     }
  //   })

  return (
    <form className='text-center'>
        <input 
          onChange={(e) => {dispatch(searchNote(e.target.value))}}
          className='rounded-pill p-2 border-0' 
          placeholder='Search...'>         
        </input>
    </form>
  )
}

export default Search
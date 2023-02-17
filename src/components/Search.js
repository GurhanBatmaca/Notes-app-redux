import {  useDispatch } from "react-redux";
import { searchNote } from "../redux/notesSlice";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className='text-center'>
        <input 
          onChange={(e) => {dispatch(searchNote(e.target.value))}}
          className='rounded-pill p-2 border-0 search-box' 
          placeholder='Search...'>         
        </input>
    </div>
  )
}

export default Search;
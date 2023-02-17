import { useSelector,useDispatch } from 'react-redux';
import { deleteNote } from '../redux/notesSlice';

const NoteList = () => {

  const dispatch = useDispatch();
  const  search = useSelector(state => state.notes.search);
  const  noteList = useSelector(state => state.notes.noteList);

  const filteredList = noteList.filter((note) => {
    if(search === "") {return noteList;} 
    if(note.note.toLowerCase().includes(search.toLowerCase())) {return note;}
  });

  return (
    <>
      {
        filteredList.length > 0 ? 
        <div className='p-4 row'>
            {
              filteredList.map((note,index) => (
                <div key={index} className='p-2 col-md-3 col-sm-6' >
                  <div className='p-3 d-flex justify-content-between note-box' style={{"backgroundColor": `${note.color}`}}>
                    <div className=''>
                      <div>{note.title} {index +1}</div>
                      <div>{note.note}</div>
                    </div>
                    <i onClick={() => {dispatch(deleteNote(note.id))}} className="fa-solid fa-xmark"></i>
                  </div>
                </div>
              ))
            }
        </div>
        : 
        <div className='p-4 text-center'><h5>There are no notes here!</h5></div>
      }
    </>
  )
}

export default NoteList;
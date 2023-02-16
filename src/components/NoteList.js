import { useEffect } from 'react';
import { addNote } from '../redux/notesSlice';
import { useSelector,useDispatch } from 'react-redux';

const NoteList = () => {
    const  noteList = useSelector(state => state.notes.filteredNotes);
    const  notes = useSelector(state => state.notes.notes);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(addNote(""))
    }, [])

  return (
    <div className='p-3 row'>
        {
          noteList.map((note,index) => (
            <div key={index} className='p-2 col-4' >
              <div className='p-3' style={{"backgroundColor": `${note.color}`}}>
                <div>{note.title}</div>
                <div>{note.note}</div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default NoteList
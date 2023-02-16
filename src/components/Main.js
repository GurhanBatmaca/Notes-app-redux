import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../redux/notesSlice';

const Main = () => {
    const dispatch = useDispatch();
    const  noteList = useSelector(state => state.notes.notes)
    const [color, setColor] = useState("#e7e013");
    const [note, setNote] = useState("")

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({id:noteList.length+1,title:`Note ${noteList.length+1}`,note,color}))
        setNote("");
        setColor("#e7e013");
        console.log(noteList.length);
    }

  return (
    <div className='text-center p-4 '>
        <form className='bg-white main' onSubmit={formSubmit}>
            <textarea
                onChange={(e) => {setNote(e.target.value)}}
                value={note}
                className='form-control border-0 p-4' 
                placeholder='Enter your note here...'>               
            </textarea>
            <div className='btn-colors d-flex justify-content-between p-4'>
                <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                <button className='btn btn-success' type='submit'>ADD</button>
            </div>
        </form>
    </div>
  )
}

export default Main
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';

const Main = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState("#e7e013");

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(addNote({id:3,title:"title 3",note:"note 3",color:"#e76813"}))
    }

  return (
    <div className='text-center p-4 '>
        <form className='bg-white main' onSubmit={formSubmit}>
            <textarea className='form-control border-0 p-4' placeholder='Enter your note here...'></textarea>
            <div className='btn-colors d-flex justify-content-between p-4'>
                <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                <button className='btn btn-success' type='submit'>ADD</button>
            </div>
        </form>
    </div>
  )
}

export default Main
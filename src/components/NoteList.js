import { useSelector } from 'react-redux';

const NoteList = () => {
    const  noteList = useSelector(state => state.notes.notes)
  return (
    <div className='p-3 d-flex gap-2'>
        {
          noteList.map((note,index) => (
            <div key={index} className='p-2' style={{"backgroundColor": `${note.color}`}}>
              <div>{note.title}{index+1}</div>
              <div>{note.note}</div>
            </div>
          ))
        }
    </div>
  )
}

export default NoteList
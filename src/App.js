import './App.css';
import Main from './components/Main';
import NoteList from './components/NoteList';
import Search from './components/Search';

function App() {
  
  return (
    <div className="App">
      <h1 className='text-center p-3 text-secondary'>NotesApp</h1>
      <Search />
      <Main />
      <NoteList />
    </div>
  );
}

export default App;

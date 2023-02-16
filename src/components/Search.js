import React from 'react'

const Search = () => {
  return (
    <form className='text-center'>
        <input 
          // onChange={searchNote}
          className='rounded-pill p-2 border-0' 
          placeholder='Search...'>         
        </input>
    </form>
  )
}

export default Search
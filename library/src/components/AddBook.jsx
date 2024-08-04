import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addBook } from '../redux/bookSlice';


function AddBook() {
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit=(e)=>{
    //prevent form default mehaviour
    e.preventDefault();
    dispatch(addBook({title,author}))
    setTitle('')
    setAuthor('')

  }

  return (
    <div>
    <h2>Add Book</h2>
    <form onSubmit={handleSubmit}>
      <input type="text" value = {title} placeholder='Title' required onChange={(e)=>setTitle(e.target.value)} />
      <input type="text" value={author} placeholder='author' required onChange ={(e)=>setAuthor(e.target.value)} />
    <button type = 'submit'>Add</button>
    </form>
    </div>
  )
}

export default AddBook;
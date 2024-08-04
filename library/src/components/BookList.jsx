import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/bookSlice';
export default function BookList() {
    //seletor could help you directly use the state
    //every reducer will have state useSeletor could help you to get state from the reducer
    const books = useSelector(state=>state.books);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchBooks())
    },[dispatch])

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
            {/* 所有reducer里面的action 都需要用dispatch 来调用 */}
            <button onClick={()=>dispatch(deleteBook(book.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


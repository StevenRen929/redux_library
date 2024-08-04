import React from 'react'
import ReactDOM from 'react-dom/client'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import { Provider } from 'react-redux'
import "./index.css"
import store from './redux/store'
function App() {

  return (
<Provider store = {store}>
<div className='App'>
  <h1>Book Library</h1>
    <AddBook/>
    <BookList/>


</div>
</Provider>
  )
}

export default App

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import books from './data/books'
import Navbar from './components/Navbar';
// import { useState } from 'react'

import './App.css'

function App() {

  const bookList = books.map(book=>(
    <a key={book.slug} href={`/book/${book.slug}`}>{book.title}</a>
  ))
console.log(bookList)


  return (
    <>
      <header>
       <Navbar books={bookList}/>
      </header>
    </>
  )
}

export default App

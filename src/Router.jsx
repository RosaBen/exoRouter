import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './pages/Book';
import books from './data/books.js'

export default function AppRouter() {
  return (
    <Router>
      <Navbar books={books} />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Bookstore</h1>} />
        <Route path="/book/:bookSlug" element={<Book books={books}/>} />
      </Routes>
    </Router>
  );
}

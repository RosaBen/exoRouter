import { Link } from 'react-router-dom';

export default function Navbar({ books }) {
  const bookList = books.map((book)=>(
            <Link to={`/book/${book.slug}`} key={book.slug}>
          {book.title}
        </Link>
  ))
  return (
    <nav>
      {bookList}
    </nav>
  );
}
import { useParams } from 'react-router-dom';

export default function Book({ books }) {
  const { bookSlug } = useParams();
  const book = books.find((b) => b.slug === bookSlug);

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>By {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}
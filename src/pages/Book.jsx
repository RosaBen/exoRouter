import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// export default function Book({ books }) {
//   const { bookSlug } = useParams();
//   const book = books.find((b) => b.slug === bookSlug);

//   if (!book) {
//     return <h1>Book not found</h1>;
//   }

//   return (
//     <div>
//       <h1>{book.title}</h1>
//       <h2>By {book.author}</h2>
//       <p>{book.description}</p>
//     </div>
//   );
// }

export default function Book({ books }) {
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook]=useState(undefined)

  useEffect(()=>{
    const findBook =books.find((book)=>book.slug === bookSlug)
    setCurrentBook(findBook)
    // console.log(currentBook)
  },[bookSlug,books])

  if (!currentBook) {
    return <h1>Book not found</h1>;
  }

  return (
    <>
      <div>
        <h1>{currentBook.title}</h1>
        <h2>By {currentBook.author}</h2>
        <p>{currentBook.description}</p>
      </div>
    </>
  );
}
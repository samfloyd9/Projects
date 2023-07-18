import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';
import '../styles/Books.css';

function BookList() {
  const { books } = useBooksContext();
  // const { books } = useNavigation();
  
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} />
    );
  });
  
  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
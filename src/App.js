import React, { useEffect, useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';


const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books',{
      title,
    })
    const updatedBooks = [...books,response.data];
    setBooks(updatedBooks);
  }

  const removeBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}` , {
      id,
    })
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    
    setBooks(updatedBooks);
  };

  const changeTitle = async (id, newTitle) => {

const response = await axios.put(`http://localhost:3001/books/${id}`, {
  title: newTitle,
});

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
  
    setBooks(updatedBooks);
  };
    return (
      <div className='app' >
        <BookList books={books} onDelete={removeBook} onEdit={changeTitle} />
        <BookCreate onSubmit={createBook} />
      </div>
    )
  }

  export default App
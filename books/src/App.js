/* eslint-disable no-unused-vars */

import {useState} from 'react';
import './App.css';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const[books, setBooks] = useState([]);

  const createBook = (title) =>{
    const updatedBooks =[
      ...books,
      {id: Math.round(Math.random() * 999), title}
    ];
    setBooks(updatedBooks);
  };
  
  const editbookById = (id, newTitle) =>{
      const updatedBooks = books.map((book) =>{
        if(book.id === id){
          return {...book, title: newTitle};
        }
        return book;
      });
      setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    // created a brand new array, we always need to do for any updates of existing array to rerender
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
   <div className='app'>
    <h1> Reading List </h1>
    <BookList books={books} onDelete= {deleteBookById} onEdit={editbookById}/>
    <BookCreate onCreate={createBook}/>
   </div>
  );
}

export default App;

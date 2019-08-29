import React from 'react';
import BookContextProvider from './contexts/bookContext';
import Navbar from './components/navbar';
import BookList from './components/bookList';
import NewBookForm from './components/bookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;

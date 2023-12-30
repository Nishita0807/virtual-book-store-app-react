import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import BookDetail from './Components/BookDetail';
import Navbar from './Components/Navbar';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
 

  useEffect(() => {
    // Fetch initial data for both Harry Potter and Sherlock Holmes
    fetchBooks('harry potter');
    fetchBooks('sherlock holmes');
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks((prevBooks) => [...prevBooks, ...(data.items || [])]);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      setBooks([]); // Clear the current books
      fetchBooks(searchQuery);
      // Navigate to the home page after search to update the URL
      
    }
  };

  return (
    <Router>
      <div style={{margin:"0px",padding:"0px"}}>
        <Navbar setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home books={books} />} />
          <Route path="/book/:id" element={<BookDetail books={books} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

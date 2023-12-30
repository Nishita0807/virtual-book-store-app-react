import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Home = ({ books }) => {
  const featuredBooks = books.slice(0, 3);
  const backgroundColors = ["#415f71", "#573f71", "#733f54"];
  const maxDescriptionLength = 40;

  const truncateDescription = (text, maxLength) => {
    if (!text || text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.split(' ').slice(0, maxLength).join(' ');
    return `${truncatedText}...`;
  };

  return (
    <div className="book-all" style={{marginTop:"0px"}}>
      <div className="featured-books">
        {featuredBooks.map((book, index) => (
          <div key={book.id} className="featured-book-item">
            <Link to={`/book/${book.id}`}>
              <div style={{ background: `url(${book.volumeInfo.imageLinks.thumbnail}) lightgray 50% / cover no-repeat`, width: "130px", height: "200px", transform: "rotate(-8deg)" }}> </div>
            </Link>
            <div className="book-details" style={{ background: `${backgroundColors[index]}`, color: "white" }}>
              <h3>{book.volumeInfo.title}</h3>
              <p style={{ color: "#D2D2D2", fontSize: "12px" }}>
                {truncateDescription(book.volumeInfo.description, maxDescriptionLength)}
              </p>
              <div style={{ color: "white", border: "1px solid white", padding: "5px" }}>Now Read!</div>
            </div>
          </div>
        ))}
      </div>
      <h2>More Books</h2>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <Link to={`/book/${book.id}`}>
              <div style={{ background: `url(${book.volumeInfo.imageLinks.thumbnail}) lightgray 50% / cover no-repeat`, width: "130px", height: "200px" }}> </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

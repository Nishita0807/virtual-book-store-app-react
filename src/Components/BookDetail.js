import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css";

const BookDetail = ({ books }) => {
  const { id } = useParams();

  // Find the book with the matching ID
  const selectedBook = books.find((book) => book.id === id);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div>
      
      {selectedBook ? (
        <div className="books-list">
          <div className="book-header">
            {/* Display details of the selected book */}
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",background: `url(${selectedBook.volumeInfo.imageLinks.thumbnail}) lightgray 50% / cover no-repeat` ,backgroundColor:"white", width:"250px",
height: "400px",transform: "rotate(-8deg)"}}> </div>
           <div style={{color:"white" ,backgroundColor:"#415f71",paddingLeft:"30px",paddingRight:"20px",paddingBottom:"10px"}}>
           < h3 style={{fontSize:"36px"}}>{selectedBook.volumeInfo.title}</h3>
           <p style={{textAlign:"right"}}>Published On : {selectedBook.volumeInfo.publishedDate} </p>
           <div>{selectedBook.volumeInfo.authors[0]}</div>
            <p style={{}}>{selectedBook.volumeInfo.description}</p>
            <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"10px",fontWeight:"bold"}}>
              <div>Avg Rating:{selectedBook.volumeInfo.averageRating || 0}</div>
              <div>Rating Count:{selectedBook.volumeInfo.ratingsCount || 0}</div>

              <div>Publisher:{selectedBook.volumeInfo.publisher}</div>

              <div>Language:{selectedBook.volumeInfo.language}</div>



            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"10px"}}>
             <Link to={selectedBook.volumeInfo.previewLink} style={{textDecoration:"none",color:"white"}}> <div style={{border:"1px solid white",padding:"10px",width:"80px"}}>Now Read!</div></Link>
<Link to={selectedBook.volumeInfo.infoLink} style={{textDecoration:"none",color:"white"}}><div style={{border:"1px solid white",padding:"10px",width:"80px"}}>More Info!</div>
</Link>            
</div>
           </div>
          </div>
          <div style={{fontWeight:"bold",color:"white",fontSize:"36px", marginTop:"60px"}}>More Books Like This</div>
          <div className="book-grid" style={{marginTop:"20px"}}>
            {books
              .filter((book) => book.id !== id) // Exclude the selected book
              .map((book) => (
                <div key={book.id} className="book-items">
                  <Link to={`/book/${book.id}`} onClick={scrollToTop}>
                    <div style={{background: `url(${book.volumeInfo.imageLinks.thumbnail}) lightgray 50% / cover no-repeat` , width:"130px", height: "200px"}}> </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;

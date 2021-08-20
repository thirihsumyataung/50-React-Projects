import logo from './logo.svg';
import './App.css';
import Book from './Components/Book';
import BookList from './Components/BookList';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="card-container">
        <div className="book-wrapper">
            <BookList/>
        </div>
      
   </div>
    </div>
   
  );
}

export default App;

import React, { Component } from 'react';
import Book from './Book';
import bookData from "../bookData"; 
class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookData,
            instockBook : bookData.instock
            
        }
    }
    // it will let you directly access to the state if you use constructor. 
    // passed down the props.
   resetCart = (id) => {
       this.setState({ instockBook: bookData.instock })
    }
    
    handleDelete = (id) => {
        console.log(this.state.books); 
       // console.log(` I'm from parent component. ${id}`);
        const sortedBooks = this.state.books.filter((item) => item.id !== id);
        this.setState({ books: sortedBooks }); 
        //console.log(sortedBooks); 
        
    }
    render() {
        const eachBook = this.state.books.map((bookItems) => bookItems.title);
        console.log(eachBook); 
        return (<section>
            <h3> These are our BookList.</h3>
            {this.state.books.map((bookItems) => {
                return (
                    <Book key={bookItems.id} info={bookItems} handleDelete={this.handleDelete} resetCart={this.resetCart}/>
                ); 
               
            })}
        </section> );
    }
}
 
export default BookList;
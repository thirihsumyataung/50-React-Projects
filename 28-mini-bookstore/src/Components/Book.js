import React, { Component } from 'react';
import Buttons from './Button';
class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,

        }
        
    }
    handleClick() {
        console.log("You click me!"); 
    }
    addCart = () => {
        this.setState({ count: this.state.count + 1 }); 
    }
    // resetCart = () => {
        
    // }
    reduceCart = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
           
        }
        else {
            this.setState({ count: 0 });
            
        }
        
    }
render() {
    const { id, image, author, title, instock } = this.props.info;
    const { handleDelete } = this.props;
    const { resetCart } = this.props; 
    
    console.log(id); 
    return (
        <div className="container">
          
            {this.state.count && this.state.count>0 ? (<div>{this.state.count <= instock ? <div className="noti">  <span className="noti-badge">{this.state.count}</span></div> :
                <div className="noti">  <span className="noti-badge out-stock">Out of Stock</span></div>
            }</div>) : null }
           
            <article className="book-card">
       
            <img src={image} alt={title} />
       
            <h3>Title: {title}</h3>
            <h5>Author : {author}</h5>
            <h5 className="instock-badge">In Stock: <span className="instock-badge-count"> {instock}</span></h5>
            <div className ="button-wrapper">
                <button type="button" onClick={this.addCart} className="add-me">Add to cart</button>
                {/* <button type="button" onClick={() => resetCart(id)} className="add-me">Reset</button> */}
                    <button type="button" onClick={this.reduceCart} className="reduce-me"> - </button>
                       <button type="button" className="delete-me" onClick={() => handleDelete(id)}>
                Delete Me
            </button>
                   
            </div>
             
                 
            </article>
            </div> );
    }
}
 
export default Book; // {this.state.count <= 0 && <div className="noti"> <span className="noti-badge out-stock" style={{ display: 'none' }}>Out of Stock</span> </div>}
//<Buttons handleDelete={handleDelete(id)} />
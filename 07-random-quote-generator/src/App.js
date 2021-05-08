import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import React, { Component } from 'react';

class App extends Component {
  state = {
    advice: ' '

  }
  componentDidMount() {
    this.fetchAdvice(); 
    console.log('COMPONENT DID MOUNT.');
  }

  fetchAdvice = () => {
    const id = Math.floor(Math.random() * 358)- 1; 
    axios.get(`https://api.adviceslip.com/advice/${id}`)
      .then((res) => {
        const data = JSON.parse(res.data + "}"); 
        const { advice } = data.slip;
        this.setState({advice}); 
        console.log({advice}); 
      })
      .catch((error) => {
       console.log(error)
      });
  }

  render() { 
    return (<div className="app">
      <div className="card">
        <h1 className="heading">
        {this.state.advice}
        </h1>
        <button className="button" onClick={this.fetchAdvice}><span>Give Me Another Advice! </span></button>
      </div>
    </div> );
  }
}
 
export default App;

import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index]; // index value will be changing . 
  console.log(people);
  // We have only 4 people --> in this case if index is -1 and index bigger than 3 , it will show error. 
  // checkNumber function will check the index value. 
  // so index number will pass to the checkNumber Function and 
  // There will be the three case : < 0 , > people.lenth or return as index number . 
  const checkNumber = (number) => {
  if (number > people.length - 1 )
    {
    return 0; 
  }
    if (number < 0) {
      return people.length - 1; 
    }
    return number; 
  
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex); 
    })
  }

  const previousPerson = () => {
     setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex); 
    })
  }

  // To get the random Review 

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length); 
    
    if (randomNumber === index) {
      randomNumber = index - 1;
     

    }
    console.log(randomNumber);
    setIndex(checkNumber(randomNumber)); 
  }

  return (<article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className="job"> {job}</p>
    <p className="info">{text}</p>

    <div className="button-container">
      <button className="prev-btn" onClick={previousPerson}><FaChevronLeft/> </button>
      <button className="next-btn" onClick={nextPerson}><FaChevronRight/> </button>
      
    </div>
<button className="random-btn" onClick={randomPerson}>Suprise Me</button>
  
  </article>);
};

export default Review;

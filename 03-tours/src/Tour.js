import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name , removeTour}) => {
  const [readMore, setReadMore] = useState(false); 
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div>
          <div className="tour-info"></div>
          <h4>{name}</h4>
          <h4 className="tour-price"> ${price} </h4>
        </div>
        <p>{ readMore ? info: `${info.substring(0,200)}...`
         
        }</p>
        <button onClick = {() => setReadMore(!readMore)}>{ readMore ? 'Show Less ' :'Read More'} </button>
        <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
      </footer>
   </article>
  )
};

export default Tour;

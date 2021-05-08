import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  
  return (
    <section className='title'>
      <h2>Our Tours: </h2>
     <div className='underline'></div>
      <div>
        { 
          tours.map((tour) => {
           return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour> 
         })}
</div>
    </section>
  )
};

export default Tours;

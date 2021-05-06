import React from 'react';

const List = ({restaurants}) => {
  return (
    <>
      { restaurants.map((restaurant) => {
        const { id, name, address, number, image } = restaurant;
        return (<article key={id} className="restaurant">
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{number}</p>
            <p>{address}</p>
          </div>
        </article>
        ); 
    })}
    </>
  );
};

export default List;
  // {people.map((person) => {
  //       const { id, name, address, image } = person;
  //       return (<article key={id} className="person">
  //         <img src={image} alt={name} />
  //         <div><h4>{name}</h4>
  //           <p>{age} years</p>
  //         </div>

  //       </article>)
  //     })}
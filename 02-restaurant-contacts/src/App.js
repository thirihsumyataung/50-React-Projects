import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [restaurants, setRestaurants] = useState(data); 
  return (
    <main>
      <section className= "container">
        <h3>{restaurants.length} Restaurants near you</h3>
        <List restaurants={restaurants}/>
        <button onClick={() => setRestaurants([])}>Clear all</button>
      </section>
    </main>
    )
}

export default App;

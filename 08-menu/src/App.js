import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import {  FaCannabis } from "react-icons/fa";

// To know all the categories 
//const allCategories = new Set(items.map((item) => item.category)); // Set will give the only unique while the array give all the items. 

const allCategories = ['all', ... new Set(items.map((item) => item.category))]; 
console.log(allCategories);


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return; 
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItems(newItem);
  };
  
  return (
    
    <main>
      <section className="menu section">
        <div className="title">
          <h2> <FaCannabis/> Special Menu</h2>
         <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>);
}

export default App;

import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'; 

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10)); // Default value of color 
  // eg: all(20) ==> we will have less color --> notice , in this case we will divide 100 by 20 
  // all(1) ==> we will have full shades since 100 % by 1 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello World');
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false); 
      console.log(colors); 
    } catch (error) {
      setError(true); 
      console.log(error); 
    }
    
  }
  return (<>
    <section className="container">
     <h3>Color Generator: </h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} placeholder="#f15025" onChange={(e) => setColor(e.target.value)} className={`${error ? 'error' : null}`} />
        <button className="btn" type="submit" >Submit</button>
      </form>
    </section>
    <section className="colors">
     
        {list.map((color, index) => {
          //console.log(color); 
         
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>

        })} 
      
</section>
    </>
  )
    

}

export default App

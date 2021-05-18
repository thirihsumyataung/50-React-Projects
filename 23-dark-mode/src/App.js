import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme'); 
  }
  return theme; 
}
function App() {

  const [theme, setTheme] = useState(getStorageTheme()); // default is dark theme 
  const toggleTheme = () => {
if (theme === 'light-theme') {
  setTheme('dark-theme');
  
}
else {
  setTheme('light-theme'); 
    }

  }
   
 
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme); 
  }, [theme]); // every time , button changed , theme changed and useEffect works --> so dependency should be theme 
  

  return <main>
    <nav>
      <div className="nav-center">
        <h1>Overreacted</h1>
        <button className="btn" onClick={toggleTheme}>Toggle</button>
      </div>
    </nav>
    <section className="articles">
      {data.map((item) => {
        return <Article key={item.id} { ... item}/> 
      })}

    </section>
  </main>
}

export default App

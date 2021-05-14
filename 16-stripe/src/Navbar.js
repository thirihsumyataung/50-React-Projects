import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from "./context"; 
const Navbar = () => {
  const { openSideBar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
   // console.log(e.target);
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    
    openSubmenu(page, {center, bottom}); 
  };
  
  const handleSubmit = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      
      closeSubmenu(); 
    }
  }
  return <nav className="nav" onMouseOver={handleSubmit}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="logo" />
        <button className="btn toggle-btn" onClick={openSideBar}><FaBars/>  </button>
      </div>
      <ul className="nav-links">
        <li><button className="link-btn" onMouseOver={displaySubmenu}>products</button></li>         
        <li><button className="link-btn" onMouseOver={displaySubmenu}>developers</button></li>
        <li><button className="link-btn" onMouseOver={displaySubmenu}>company</button></li>    
      </ul>
      <button className="btn signin-btn">Sign in </button>
    </div>

  </nav>
}

export default Navbar

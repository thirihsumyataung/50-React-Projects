import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);
  
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  // Manually update the container 
  useEffect(() => {
    // To adjust the height of the link container 
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linkHeight}px`;     
    }
    else {
      linkContainerRef.current.style.height = '0px'; 
    }
    console.log(linkHeight); 
  }, [showLinks]); 
  return (
    <nav>
      <div className="nav-center">
      <div className="nav-header"> <img src={logo} alt="logo"/> <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}><FaBars/> </button></div>     
        

         <div  className="links-container" ref = {linkContainerRef}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (<li key={id}>
              <a href={url}>{text} </a>
              </li>)
            })}
          </ul>
        </div>
      

        <ul className="social-icons">
           
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (< li key={id}>
              <a href={url} >{icon}</a>
            </li>)
          })}
        
        </ul>
    </div>
    </nav>
    
    )
}

export default Navbar
/* <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <a href="#">product</a>
            </li> */

        //    <li>
        //       <a href="https://www.twitter.com"> <FaTwitter/></a>
        //   </li>
        //    <li>
        //       <a href="https://www.twitter.com"> <FaTwitter/></a>
        //   </li>
        //  <li>
        //       <a href="https://www.twitter.com"> <FaTwitter/></a>
        //   </li>
        //    <li>
        //       <a href="https://www.twitter.com"> <FaTwitter/></a>
        //   </li>
import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
// If there is an error when we set up the API token , it will say eror : "Auth error : The access token is invalid"
function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState(''); 

  const fetchImages = async () => {
    setLoading(true); 
    let url;
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    
    if (query) {
      url=`${searchUrl}${clientID}${urlPage}${urlQuery}`
    }
    else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    
    // url = `${mainUrl}${clientID}&page=3`; it will be the different images 
    try {
      const response = await fetch(url);
      const data = await response.json();
      //setPhotos((oldPage) => { return [...oldPage, ...data]});
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results; 
        }
        else if (query) {
          return [...oldPhotos, ...data.results]; 
        }
        else {
          return [...oldPhotos, ...data]; 
        }
      })
      setLoading(false);     
      console.log(data);     
    }
    catch (error) {
      setLoading(false);
      
      console.log(error); 
    }
  }

  useEffect(() => {
    fetchImages();
    //eslint-disable-next-line 
  }, [page]);

  //
  // three values 
  // 1. check for the value of the inner width 
  // 2. how much we have scroll 
  // 3. the height of the document 


  // console.log(`Inner Height: ${window.innerHeight}`);
  //     console.log(`ScrollY : ${window.scrollY}`);
  //     console.log(`body height: ${document.body.scrollHeight}`);


  //if I did document.body.scrollHeight - 100 --> it will print it worked in 100 times as soon as it scrolled down
  //  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2 ) {
  //       console.log('It worked.'); 
  //     }
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (!loading && (window.innerHeight + window.scrollY   >= document.body.scrollHeight - 2 )) {
        //console.log('It worked.'); 
        setPage((oldPage) => { return oldPage + 1 }) // infinite scroll down
      }
      
    });
    return () => window.removeEventListener('scroll', event);
     //eslint-disable-next-line 
  }, []); 
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1)
    fetchImages();
    
    console.log(e.target); 
  }
  return <main>
    <section className="search">
      <form className="search-form">
        <input type="text" placeholder="search" className="form-input" value={query} onChange={(e) => {setQuery(e.target.value)}}/>
        <button type="submit" className="submit-btn" onClick={handleSubmit}> <FaSearch/> </button>
      </form>
    </section>
    <section className="photos">
      <div className="photos-center">
        {photos.map((image, index) => { // setPhotos(data) --> so the images in API will be assigned in photos 
         
          return <Photo key={index} {...image}/> 
        })}
      </div>
      { loading && <h2 className="loading">Loading... </h2>}
    </section>
  </main>
}

export default App

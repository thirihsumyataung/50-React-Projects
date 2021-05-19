import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
//***Moved API_ENDPOINT to useFetch.js  I will make with three ### */

import useFetch from './useFetch'; 
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
console.log(API_ENDPOINT); // it will show you the correct url link link with your API key which you kept in dot env file. 



const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  // *** ###
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState({ show: false, msg: ' ' });
  // const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('Avengers');
  const { isLoading, error , data:movies } = useFetch(`&s=${query}`); 
  // *** ###
  // const fetchMovies = async (url) => {
  //   setIsLoading(true); // Listen we are loading 
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     //setMovies(data);
  //     //setIsLoading(false);
  //     console.log(data);
  //     if (data.Response === "True") {
  //       setMovies(data.Search);
  //       setError({ show: false, msg: " " }); 
  //     }
  //     else {
  //       setError({show: true, msg: data.Error})
  //     }
  //     setIsLoading(false);
      
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(true); 
  //   }
    
  // }
  // useEffect(() => {
  //   fetchMovies(`${API_ENDPOINT}&s=${query}`); 
  // }, [query])

  return <AppContext.Provider value={{isLoading, error, movies, query, setQuery}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

//1. We will have the state value first 
// There will be default vaule in movies before we search anything yet 
// Query is set as 'Avengers' so if we don't search anything yet , it will show batman movies 

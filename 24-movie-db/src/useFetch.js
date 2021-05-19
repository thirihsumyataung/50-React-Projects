import React , { useState, useEffect } from 'react'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = (urlParms) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({ show: false, msg: ' ' });
    const [data, setData] = useState(null);
    
    const fetchMovies = async (url) => {
    setIsLoading(true); // Listen we are loading 
    try {
      const response = await fetch(url);
        const data = await response.json();
        

      console.log(data);
      if (data.Response === "True") {
       // setMovies(data.Search);
          setData(data.Search || data);
        setError({ show: false, msg: " " }); 
      }
      else {
        setError({show: true, msg: data.Error})
      }
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
      setIsLoading(true); 
    }
    
  }
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParms}`); 
  }, [urlParms])

    return {isLoading, error,data }
}

export default useFetch; 
//rafc 

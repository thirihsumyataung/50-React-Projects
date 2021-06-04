import React,{ useState, useEffect} from 'react';
import styled from "styled-components";
import { MdEvent } from 'react-icons/md';
import NavBar from "./Home"; 
const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
function NasaPhoto() {
    const [nasaPhoto, setNasaPhoto] = useState(null);
    

    const getPhoto = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setNasaPhoto(data);
            //console.log(nasaPhoto); 
        } catch(error) {
            console.log(error); 
        }
    }
    useEffect(() => {
        getPhoto(); 
    }, []);
    
    if (!nasaPhoto) {
        return <NasaWrapper >
            <p className="error-msg">No Nasa Photos</p>
        </NasaWrapper>
    }
    return (<NasaWrapper className="page section section-center" >

        {nasaPhoto.media_type === "image" ? <img src={nasaPhoto.url} alt={nasaPhoto.title} /> : <iframe title="space-video" src={nasaPhoto.url} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen className="img" />}
        <article>
            <h2 className="title">{nasaPhoto.title}</h2>
            <div className="underline"> </div>
            <p>{nasaPhoto.explanation}</p>
            <footer>Credit to:{" "} {nasaPhoto.copyright}</footer>
        <MdEvent/>{nasaPhoto.date}
        </article>
       
    </NasaWrapper>)
}

export default NasaPhoto;

const NasaWrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  .error-msg{
      color: red; 
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .title {
        font-size: 2rem;
    }
  }
`

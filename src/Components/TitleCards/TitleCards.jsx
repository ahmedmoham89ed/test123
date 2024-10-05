import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import { Link } from 'react-router-dom'
const TitleCards = ({tittle,category}) => {
  
    const CardRef =useRef();
    const [apiData,setapiData]=useState([]);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmNzk1ZTk2MDNjZGFhYjU4YzI4ZWIzZjBmOWQ2NSIsIm5iZiI6MTcyNTQ3NTk3Ni43OTM3MjksInN1YiI6IjY2ZDg4MmU5OTdkYzQ4YTIxMDlkMzFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OZBVawdJfhqeVI5s18uw_O_RZ6nwKNHGmb8gwaeQwZY'
      }
    };
    const handlewheel=(event)=>{
          event.preventDefault();
          CardRef.current.scrollLeft +=event.deltaY;
    }
    useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
          .then(response => response.json())
          .then(response => setapiData(response.results))
          .catch(err => console.error(err));
      
          CardRef.current.addEventListener("wheel",handlewheel);
    },[])


    return (
      <div className='titleCards'>
        <h1>{tittle?tittle:"Popular on Netflix"}</h1>
        <div className="card_list" ref={CardRef}>
          {apiData.map((card,index)=>{
            return <Link to={`/Player/${card.id}`} className="card" key={index}>
                  <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                  <p>{card.original_title}</p>
            </Link>
          })}
        </div>
      </div>
    )
}

export default TitleCards

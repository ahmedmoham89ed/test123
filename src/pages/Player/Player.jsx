import React, { useEffect, useState } from 'react';
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const navigate=useNavigate();
  const {id} =useParams();

  const [apiData,setapiData] =useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmNzk1ZTk2MDNjZGFhYjU4YzI4ZWIzZjBmOWQ2NSIsIm5iZiI6MTcyNTQ3NTk3Ni43OTM3MjksInN1YiI6IjY2ZDg4MmU5OTdkYzQ4YTIxMDlkMzFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OZBVawdJfhqeVI5s18uw_O_RZ6nwKNHGmb8gwaeQwZY'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setapiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  
 
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer"frameBorder="0" allowFullScreen >
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player

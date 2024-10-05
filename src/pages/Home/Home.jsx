import React from 'react';
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from '../../Components/TitleCards/TitleCards.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption_img'/>
          <p>Discovring his ties to a sceret ancient order, a young man living in modern cairo embraks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Of Info</button>
          </div>
      <TitleCards className="title-cards"/>
        </div>
      </div>
      <div className="more-cards">
          <TitleCards tittle={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards tittle={"Only on Netflix"} category={"popular"}/>
          <TitleCards tittle={"Upcoming"} category={"upcoming"}/>
          <TitleCards tittle={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import "./Footer.css"
import youtube_icon from "../../assets/youtube_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
            <img src={youtube_icon} alt="" />
            <img src={instagram_icon} alt="" />
            <img src={facebook_icon} alt="" />
            <img src={twitter_icon} alt="" />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Term of Use</li>
          <li>Privarcy</li>
          <li>Settings</li>
          <li>More Info</li>
          <li>The control Unit</li>
          <li>Netflix Clone</li>
          <li>App Delivary</li>
          <li>Build Profile</li>
          <li>Complete Calculater</li>
          <li>Digital Clock</li>
          <li>Quiz App</li>
          <li>Amazon Clone</li>
          <li>Spotify Clone</li>
          <li>All Members</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer

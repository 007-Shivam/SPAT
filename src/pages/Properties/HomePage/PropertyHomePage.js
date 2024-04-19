import React from 'react'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

import './PropertyHomePage.css'

import HeroBg from '../../../assets/hero-bg.mp4'
import New from '../../../assets/new-flat.png'
import Rent from '../../../assets/rent.png'
import Sell from '../../../assets/sell.png'

import Navbar from '../../../components/navbar/PropertyNavbarComponent'

export default function PropertyHomePage() {
  const navigate = useNavigate();

  const navigateToBuyPage = () => {
    navigate('/propertybuypage');
  };
  const navigateToRentPage = () => {
    navigate('/propertyrentpage');
  };
  const navigateToSellPage = () => {
    navigate('/propertysellpage');
  };

  return (
    <>
      <Helmet>
        <title>Samarth Properties & Tourism</title>
      </Helmet>
      <Navbar />

      <div className='property-hero'>
        <div className='hero-descrption'>
          <div className='box'></div>
          <p>
            Unlock Your Dream Home:<br />Your Key to<b> Real Estate<br />Excellence.</b>
          </p>

        </div>
        <button className='find-a-home'> Find a Home </button>
        <button className='rent-place'> Rent place </button>
        <video src={HeroBg} autoPlay loop muted />
      </div>

      <h4>Let`s Get Started</h4>

      <div className='three-section'>

        <div >
          <img src={Rent} alt='rent' />
          <p>Unlock Your Next Chapter,<br />Sell Your Space.</p>
          <button className='section-button' onClick={navigateToRentPage}><b>RENT APARTMENT</b></button>
        </div>

        <div >
          <img src={New} alt='new' />
          <p>A Fresh Beginning, A New Haven.</p>
          <button className='section-button' onClick={navigateToBuyPage}><b>NEW FLAT</b></button>
        </div>

        <div >
          <img src={Sell} alt='sell' />
          <p>Your Ideal Home, Just a Lease Away.</p>
          <button className='section-button' onClick={navigateToSellPage}><b>SELL YOUR PLACE</b></button>
        </div>
      </div>
    </>
  )
}

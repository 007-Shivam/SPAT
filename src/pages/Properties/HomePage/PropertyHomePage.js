import React, { useRef } from 'react'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import './PropertyHomePage.css'

import HeroBg from '../../../assets/hero-bg.mp4'
import New from '../../../assets/new-flat.png'
import Rent from '../../../assets/rent.png'
import Sell from '../../../assets/sell.png'
import Consult from '../../../assets/consultation.png'
import Support from '../../../assets/support.png'
import Client from '../../../assets/client.png'


import Navbar from '../../../components/navbar/PropertyNavbarComponent'

export default function PropertyHomePage() {
  const navigate = useNavigate();
  const threeSectionRef = useRef(null);

  const navigateToBuyPage = () => {
    navigate('/propertybuy');
  };
  const navigateToRentPage = () => {
    navigate('/propertyrent');
  };
  const navigateToSellPage = () => {
    navigate('/propertysell');
  };

  const scrollToThreeSection = () => {
    if (threeSectionRef.current) {
      threeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
        <button className='find-a-home' onClick={scrollToThreeSection}> Find a Home </button>
        <button className='rent-place' onClick={navigateToRentPage}> Rent place </button>
        <video src={HeroBg} autoPlay loop muted />
      </div>


      <h3>Why Choose Us</h3>

      <div className='info'>

        <div className='about-us'>
          <div>
            <img src={Client} alt='client' />
          </div>
          <p>Your satisfaction is our top priority, and we go above and beyond to exceed your expectations,
            building lasting relationships based on trust and integrity.</p>
        </div>

        <div className='about-us'>
          <div>
            <img src={Support} alt='support' />
          </div>
          <p>We don't just stop at the transaction; we're your partners in every step of your real estate journey.
            From initial consultation to after-sales service, we offer a comprehensive support system that extends far
            beyond just buying or selling.</p>
        </div>

        <div className='about-us'>
          <div>
            <img src={Consult} alt='consult' />
          </div>
          <p>We help the buyers from starting to the end of home purchase by understanding their needs and offering
            them the ideal investment opportunities.</p>
        </div>

      </div>


      <h4>Let`s Get Started</h4>

      <div className='three-section' ref={threeSectionRef}>

        <div >
          <img src={Rent} alt='rent' />
          <p>Your Ideal Home, Just a Lease Away.</p>
          <button className='section-button' onClick={navigateToRentPage}><b>RENT APARTMENT</b></button>
        </div>

        <div >
          <img src={New} alt='new' />
          <p>A Fresh Beginning, A New Haven.</p>
          <button className='section-button' onClick={navigateToBuyPage}><b>NEW FLAT</b></button>
        </div>

        <div >
          <img src={Sell} alt='sell' />
          <p>Unlock Your Next Chapter,<br />Sell Your Space.</p>
          <button className='section-button' onClick={navigateToSellPage}><b>SELL YOUR PLACE</b></button>
        </div>

      </div>
    </>
  )
}

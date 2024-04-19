import React from 'react'
import { Helmet } from "react-helmet";


import Navbar from '../../../components/navbar/TourismNavbarComponent'


export default function CarHomePage() {
  return (
    <>
      <Helmet>
        <title>RENT A CAR</title>
      </Helmet>
      <Navbar />
    </>
  )
}

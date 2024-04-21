import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";


import Navbar from '../../../components/navbar/TourismNavbarComponent'
import TourismLoader from '../../../components/loader/TourismLoader'


export default function CarHomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Samarth Tourism & Properties</title>
      </Helmet>
      {loading ? (
        <TourismLoader />
      ) : (
        <Navbar />

      )}
    </>
  )
}

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import PropertyLoader from "./components/loader/PropertyLoader";
import TourismLoader from "./components/loader/TourismLoader"
import Footer from './components/footer/FooterComponent';
import PropertyHomePage from './pages/Properties/HomePage/PropertyHomePage';
import PropertyBuyPage from './pages/Properties/Buy/PropertyBuyPage';
import PropertyRentPage from './pages/Properties/Rent/PropertyRentPage';
import PropertySellPage from './pages/Properties/Sell/PropertySellPage';
import CarHomePage from './pages/Tourism/HomePage/CarHomePage'
import Fleet from './pages/Tourism/Fleet/Fleet'

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderComponent, setLoaderComponent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath.startsWith('/property')) {
      setLoaderComponent(<PropertyLoader />);
    } else if (currentPath.startsWith('/rentacar') || currentPath.startsWith('/carfleet')) {
      setLoaderComponent(<TourismLoader />);
    } else {
      setLoaderComponent(<PropertyLoader />);
    }
  }, []);

  return (
    <>
      {loading ? (
        loaderComponent
      ) : (
        <>
          <Router>
            <Routes>
              <Route exact path='/' element={<PropertyHomePage />} />
              <Route path='/propertybuy' element={<PropertyBuyPage />} />
              <Route path='/propertyrent' element={<PropertyRentPage />} />
              <Route path='/propertysell' element={<PropertySellPage />} />
              <Route path='/rentacar' element={<CarHomePage />} />
              <Route path='/carfleet' element={<Fleet />} />
            </Routes>
            <Footer />
          </Router>
        </>
      )}
    </>
  );
}

export default App;

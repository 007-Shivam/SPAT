import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Footer from './components/footer/FooterComponent';
import PropertyHomePage from './pages/Properties/HomePage/PropertyHomePage';
import PropertyBuyPage from './pages/Properties/Buy/PropertyBuyPage';
import PropertyRentPage from './pages/Properties/Rent/PropertyRentPage';
import PropertySellPage from './pages/Properties/Sell/PropertySellPage';
import CarHomePage from './pages/Tourism/HomePage/CarHomePage'
import Fleet from './pages/Tourism/Fleet/Fleet'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<PropertyHomePage />} />
          <Route path='/propertybuypage' element={<PropertyBuyPage />} />
          <Route path='/propertyrentpage' element={<PropertyRentPage />} />
          <Route path='/propertysellpage' element={<PropertySellPage />} />
          <Route path='/carhomepage' element={<CarHomePage />} />
          <Route exact path='/' element={<PropertyHomePage />} />
          <Route path='/fleet' element={<Fleet />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

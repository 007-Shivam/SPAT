import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';

import Navbar from './components/navbar/NavbarComponent';
import House from './pages/House'
import Cars from './pages/Cars'


function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<House />} />
          <Route path='/house' element={<House />} />
          <Route path='/cars' element={<Cars />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

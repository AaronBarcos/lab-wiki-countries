import './App.css';

import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home';

function App() {

  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    getDataCountries()
  }, [])

  const getDataCountries = async () => {
    try {
      const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
      setAllCountries(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      {/* <Navbar /> */}
      <CountriesList className="List" allCountries={allCountries}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:country' element={<CountryDetails/> } />
      </Routes>
    </div>
  );
}

export default App;

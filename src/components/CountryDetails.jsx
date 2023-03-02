import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const { country } = useParams();

  const [countryDetails, setCountryDetails] = useState(null);
  // console.log(country)
  // console.log(allCountries)

  useEffect(() => {
    getDataCountries();
  }, [country]);

  const getDataCountries = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${country}`
      );
      setCountryDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log(countryDetails.alpha2Code.toLowerCase())

  return (
    <div>
      <h1>Detalles del pais</h1>
      <div>
        <h1>{countryDetails.name.common}</h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt="" />
        <h4>Capital: {countryDetails.capital} </h4>
        <h4>Area: {countryDetails.area}km </h4>
        <h4>Borders:
        {countryDetails.borders.map((eachBorder) => {
          return (
            <p>{eachBorder}</p>
          )
        })}
        </h4>
      </div>
    </div>
  );
}

export default CountryDetails;

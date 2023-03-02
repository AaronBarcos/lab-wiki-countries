import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { allCountries } = props;

  return (
    <div>
      <h3>Countries:</h3>
      {allCountries.map((eachCountry) => {
        return <p key={eachCountry.alpha3Code}>
        <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
        </p>;
      })}
    </div>
  );
}

export default CountriesList;

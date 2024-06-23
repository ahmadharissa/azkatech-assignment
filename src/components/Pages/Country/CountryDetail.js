import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CountryDetail = () => {
  const { id } = useParams();
  const { country } = useSelector((state) => state.CountryReducer);
  const countryDetails = country.find((c) => c.cca3 === id);

  if (!countryDetails) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>{countryDetails.name.official}</h1>
      <img
        src={countryDetails.flags.svg}
        width={200}
        height={150}
        alt={`${countryDetails.name.official} flag`}
      />
      <p>Timezones: {countryDetails.timezones.join(", ")}</p>
    </div>
  );
};

export default CountryDetail;

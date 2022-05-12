import React, { useState, useEffect } from "react";
import { CountriesList } from "../CountriesList/CountriesList";
import { getCountries, getContinents } from "../../pages/api/CountriesAPI";
import { Filterbar } from "../Filterbar/Filterbar";
import { Country } from "../types";

export const Homepage = () => {
  const [countries, setCountries] = useState([] as Country[]);
  const [unfiltered, setUnfiltered] = useState([]);
  const [continents, setContinents] = useState([]);
  const countriesAPI = getCountries();
  const continentsAPI = getContinents();

  useEffect(() => {
    if (countriesAPI.data) {
      setCountries(countriesAPI.data.countries);
      setUnfiltered(countriesAPI.data.countries);
    }
  }, [countriesAPI.loading]);

  useEffect(() => {
    if (continentsAPI.data) {
      setContinents(continentsAPI.data.continents);
    }
  }, [continentsAPI.loading]);

  return (
    <>
      <Filterbar
        setCountries={setCountries}
        countries={unfiltered}
        continents={continents}
      />
      <CountriesList data={countries} loading={countriesAPI.loading} />
    </>
  );
};

import React from "react";
import { useParams } from "react-router-dom";
import { getCountryByCode } from "../../pages/api/CountriesAPI";
import { CountryDetail } from "../CountryDetail/CountryDetail";

export const DetailPage = () => {
  const { countryCode } = useParams();
  const data = getCountryByCode(countryCode!);
  return <CountryDetail {...data} />;
};

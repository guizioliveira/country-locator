import React from "react";
import { CountryCard } from "../CountryCard";
import { Loading } from "../Loading";
import { Country } from "../types";

export interface CountriesProps {
  data: Country[];
  loading: boolean;
}

export const CountriesList: React.FC<CountriesProps> = ({ data, loading }) => {
  return (
    <div className="container mx-auto mt-96 md:mt-40 mb-6">
      <div className="flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 md:gap-7">
            {data.map((country, index) => (
              <CountryCard key={index} country={country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

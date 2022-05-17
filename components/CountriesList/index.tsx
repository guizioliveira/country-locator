import React from "react";
import { Loading } from "../Loading";
import { Country } from "../types";

export interface CountriesProps {
  data: Country[];
  loading: boolean;
}

export const CountriesList: React.FC<CountriesProps> = ({ data, loading }) => {
  const DETAILS_URL = "/country/details/";

  return (
    <div className="container mx-auto mt-96 md:mt-40 mb-6">
      <div className="flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 md:gap-7">
            {data.map((country, index) => (
              <button
                key={index}
                onClick={() => console.log(`${DETAILS_URL}${country.code}`)}
                className="flex flex-col p-4 bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark rounded-md border-[1px] border-shape shadow min-h-min group sm:hover:from-primary sm:hover:to-primary sm:hover:scale-110 transition-transform transition-color focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-background"
              >
                <h2 className=" text-grayer text-left text-lg tracking-wide font-extrabold mb-2">
                  {country.name}
                </h2>
                <span className="text-sm text-base-text font-light group-hover:font-bold">
                  {country.continent.name}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

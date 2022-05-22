import React from "react";
import { CountryCard } from "../CountryCard";
import { Loading } from "../Loading";
import { Country } from "../types";

export interface CountriesListProps {
  data: Country[];
  loading: boolean;
  isFilterbarOpen: boolean;
  setIsLoading: () => void;
}

export const CountriesList: React.FC<CountriesListProps> = ({
  data,
  loading,
  isFilterbarOpen,
  setIsLoading,
}) => {
  return (
    <div
      className={`${
        isFilterbarOpen ? "mt-[26rem]" : "mt-36"
      } container mx-auto md:mt-40 mb-6 transition-all duration-300`}
    >
      <div className="flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : data.length != 0 ? (
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 md:gap-7">
            {data
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((country, index) => (
                <CountryCard
                  key={index}
                  country={country}
                  setIsLoading={setIsLoading}
                />
              ))}
          </div>
        ) : (
          <span className="text-base-text font-bold text-lg">
            No results for this search.
          </span>
        )}
      </div>
    </div>
  );
};

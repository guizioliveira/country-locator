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
      } container mx-auto mb-6 transition-all duration-300 md:mt-40`}
    >
      <div className="flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : data.length != 0 ? (
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-7 lg:grid-cols-5">
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
          <span className="text-lg font-bold text-base-text">
            No results for this search.
          </span>
        )}
      </div>
    </div>
  );
};

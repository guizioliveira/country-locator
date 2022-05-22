// import React, { useState, useEffect } from "react";
import {
  GlobeHemisphereWest,
  IdentificationCard,
  Buildings,
  CurrencyCircleDollar,
  ChatsCircle,
} from "phosphor-react";
import { Country } from "../types";

interface CountryProps {
  country: Country;
}

export const CountryDetail: React.FC<CountryProps> = ({ country }) => {
  return (
    <>
      <div className="bg-primary-dark mb-8">
        <div className="container mx-auto">
          <h1 className="text-primary font-extrabold tracking-wide text-center sm:text-left text-5xl py-6">
            {country.name}
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl text-base-text border-b-2 border-shape text-center sm:text-left w-full sm:w-1/4 pb-1 mb-5">
          About
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div className="flex items-center pl-5 p-4 bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark rounded-md border-[1px] border-shape shadow min-h-min group">
            <IdentificationCard
              className="w-14 h-14 sm:w-10 sm:h-10 text-primary"
              weight="fill"
            />
            <div className="flex flex-col pl-5 border-l-[1px] border-shape ml-5">
              <h3 className="text-grayer font-bold text-xl sm:text-lg">
                {country.code}
              </h3>
              <span className="text-shape-border text-lg sm:text-base">
                Code
              </span>
            </div>
          </div>
          <div className="flex items-center pl-5 p-4 bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark rounded-md border-[1px] border-shape shadow min-h-min group">
            <GlobeHemisphereWest
              className="w-14 h-14 sm:w-10 sm:h-10 text-primary"
              weight="fill"
            />
            <div className="flex flex-col pl-5 border-l-[1px] border-shape ml-5">
              <h3 className="text-grayer font-bold text-xl sm:text-lg">
                {country.continent.name}
              </h3>
              <span className="text-shape-border text-lg sm:text-base">
                Continent
              </span>
            </div>
          </div>
          <div className="flex items-center pl-5 p-4 bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark rounded-md border-[1px] border-shape shadow min-h-min group">
            <Buildings
              className="w-14 h-14 sm:w-10 sm:h-10 text-primary"
              weight="fill"
            />
            <div className="flex flex-col pl-5 border-l-[1px] border-shape ml-5">
              <h3 className="text-grayer font-bold text-xl sm:text-lg">
                {country.capital ? country.capital : "Not Informed"}
              </h3>
              <span className="text-shape-border text-lg sm:text-base">
                Capital
              </span>
            </div>
          </div>
          <div className="flex items-center pl-5 p-4 bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark rounded-md border-[1px] border-shape shadow min-h-min group">
            <CurrencyCircleDollar
              className="w-14 h-14 sm:w-10 sm:h-10 text-primary"
              weight="fill"
            />
            <div className="flex flex-col pl-5 border-l-[1px] border-shape ml-5">
              <h3 className="text-grayer font-bold text-xl sm:text-lg">
                {country.currency
                  ? country.currency?.split(",").join(", ")
                  : "Not Informed"}
              </h3>
              <span className="text-shape-border text-lg sm:text-base">
                Currency
              </span>
            </div>
          </div>
          <div className="flex items-center pl-5 p-4 bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark rounded-md border-[1px] border-shape shadow min-h-min group">
            <ChatsCircle
              className="w-14 h-14 sm:w-10 sm:h-10 text-primary"
              weight="fill"
            />
            <div className="flex flex-col pl-5 border-l-[1px] border-shape ml-5">
              <h3 className="text-grayer font-bold text-xl sm:text-lg">
                {country.languages.length > 0
                  ? country.languages
                      .map((language) => language.name)
                      .join(", ")
                  : "Not Informed"}
              </h3>
              <span className="text-shape-border text-lg sm:text-base">
                Language
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

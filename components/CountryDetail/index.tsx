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
      <div className="mb-8 bg-primary-dark">
        <div className="container mx-auto">
          <h1 className="py-6 text-center text-5xl font-extrabold tracking-wide text-primary sm:text-left">
            {country.name}
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="mb-5 w-full border-b-2 border-shape pb-1 text-center text-2xl text-base-text sm:w-1/4 sm:text-left">
          About
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="group flex min-h-min items-center rounded-md border-[1px] border-shape bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark p-4 pl-5 shadow">
            <IdentificationCard
              className="h-14 w-14 text-primary sm:h-10 sm:w-10"
              weight="fill"
            />
            <div className="ml-5 flex flex-col border-l-[1px] border-shape pl-5">
              <h3 className="text-xl font-bold text-grayer sm:text-lg">
                {country.code}
              </h3>
              <span className="text-lg text-shape-border sm:text-base">
                Code
              </span>
            </div>
          </div>
          <div className="group flex min-h-min items-center rounded-md border-[1px] border-shape bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark p-4 pl-5 shadow">
            <GlobeHemisphereWest
              className="h-14 w-14 text-primary sm:h-10 sm:w-10"
              weight="fill"
            />
            <div className="ml-5 flex flex-col border-l-[1px] border-shape pl-5">
              <h3 className="text-xl font-bold text-grayer sm:text-lg">
                {country.continent.name}
              </h3>
              <span className="text-lg text-shape-border sm:text-base">
                Continent
              </span>
            </div>
          </div>
          <div className="group flex min-h-min items-center rounded-md border-[1px] border-shape bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark p-4 pl-5 shadow">
            <Buildings
              className="h-14 w-14 text-primary sm:h-10 sm:w-10"
              weight="fill"
            />
            <div className="ml-5 flex flex-col border-l-[1px] border-shape pl-5">
              <h3 className="text-xl font-bold text-grayer sm:text-lg">
                {country.capital ? country.capital : "Not Informed"}
              </h3>
              <span className="text-lg text-shape-border sm:text-base">
                Capital
              </span>
            </div>
          </div>
          <div className="group flex min-h-min items-center rounded-md border-[1px] border-shape bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark p-4 pl-5 shadow">
            <CurrencyCircleDollar
              className="h-14 w-14 text-primary sm:h-10 sm:w-10"
              weight="fill"
            />
            <div className="ml-5 flex flex-col border-l-[1px] border-shape pl-5">
              <h3 className="text-xl font-bold text-grayer sm:text-lg">
                {country.currency
                  ? country.currency?.split(",").join(", ")
                  : "Not Informed"}
              </h3>
              <span className="text-lg text-shape-border sm:text-base">
                Currency
              </span>
            </div>
          </div>
          <div className="group flex min-h-min items-center rounded-md border-[1px] border-shape bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark p-4 pl-5 shadow">
            <ChatsCircle
              className="h-14 w-14 text-primary sm:h-10 sm:w-10"
              weight="fill"
            />
            <div className="ml-5 flex flex-col border-l-[1px] border-shape pl-5">
              <h3 className="text-xl font-bold text-grayer sm:text-lg">
                {country.languages.length > 0
                  ? country.languages
                      .map((language) => language.name)
                      .join(", ")
                  : "Not Informed"}
              </h3>
              <span className="text-lg text-shape-border sm:text-base">
                Language
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

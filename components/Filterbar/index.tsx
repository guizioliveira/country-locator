import React, { useState } from "react";
import {
  MagnifyingGlass,
  Backspace,
  CaretDown,
  Check,
  List,
} from "phosphor-react";
import { Listbox } from "@headlessui/react";
import { Country } from "../types";

interface FilterBarProps {
  isFilterbarOpen: boolean;
  setIsFilterbarOpen: (isFilterbarOpen: boolean) => void;
  countries: Country[];
  setCountries: (countries: Country[]) => void;
  continents: Array<{
    name: string;
    code: string;
  }>;
}

export const Filterbar: React.FC<FilterBarProps> = ({
  isFilterbarOpen,
  setIsFilterbarOpen,
  countries,
  setCountries,
  continents,
}) => {
  const [textSearch, setTextSearch] = useState("");
  const [currencySearch, setCurrencySearch] = useState("");
  const [continentCode, setContinentCode] = useState("");

  const handleSearch = () => {
    setCountries(
      countries.filter((country) => {
        const filters = [];
        if (textSearch) {
          filters.push(
            country.name.toLowerCase().startsWith(textSearch.toLowerCase())
          );
        }
        if (currencySearch) {
          filters.push(
            country.currency
              ?.toLowerCase()
              .includes(currencySearch.toLowerCase())
          );
        }
        if (continentCode) {
          filters.push(country.continent.code === continentCode);
        }

        return filters.reduce((acc, curr) => acc && curr, true);
      })
    );
  };

  const handleClearSearch = () => {
    setCountries(countries);
    setTextSearch("");
    setCurrencySearch("");
    setContinentCode("");
  };

  return (
    <div className="relative w-full bg-primary-dark py-5 shadow-xl md:py-4">
      <div
        className={`${
          !isFilterbarOpen
            ? "max-h-0 overflow-hidden opacity-0"
            : "max-h-96 pb-4 opacity-100"
        } duration-400 container mx-auto flex flex-col justify-end gap-4 overflow-visible transition-all ease-linear md:max-h-max md:flex-row md:pb-0 md:opacity-100`}
      >
        <Listbox value={continentCode} onChange={setContinentCode}>
          <div className="relative z-10">
            <Listbox.Button className="relative h-10 min-w-full cursor-pointer rounded-md bg-shape px-3 text-left text-sm text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-primary-dark md:min-w-[200px]">
              <span className="block truncate">
                {continentCode ? (
                  continents.find(
                    (continent) => continent.code === continentCode
                  )?.name
                ) : (
                  <span className="text-gray-400">Filter by continent</span>
                )}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <CaretDown
                  size={20}
                  className="text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-secundary-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {continents.map((continent) => (
                <Listbox.Option
                  key={continent.code}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-primary text-white" : "text-gray-400"
                    }`
                  }
                  value={continent.code}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected && "text-white"}`}
                      >
                        {continent.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-shape">
                          <Check size={20} aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
        <input
          className="h-10 min-w-[200px] rounded-md bg-shape px-3 text-sm text-white placeholder-gray-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-primary-dark"
          type="text"
          placeholder="Filter by currency"
          onChange={(e) => setCurrencySearch(e.target.value)}
          value={currencySearch || ""}
        />
        <input
          className="h-10 min-w-[200px] rounded-md bg-shape px-3 text-sm text-white placeholder-gray-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-primary-dark"
          type="text"
          placeholder="Search by country name"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch || ""}
        />
        <button
          className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-primary text-white transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-primary-dark md:w-10 md:hover:bg-primary-hover"
          onClick={handleSearch}
        >
          <MagnifyingGlass size={22} weight="bold" />
        </button>
        <button
          className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md bg-primary text-white transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-primary-dark md:w-10 md:hover:bg-primary-hover"
          onClick={handleClearSearch}
        >
          <Backspace size={22} weight="bold" />
        </button>
      </div>
      <div className="flex justify-center md:hidden">
        <button
          onClick={() => setIsFilterbarOpen(!isFilterbarOpen)}
          className="absolute h-10 w-10 rounded-full bg-secundary-dark"
        >
          <div className="flex h-10 w-10 items-center justify-center">
            <List weight="bold" className="h-6 w-6 text-primary" />
          </div>
        </button>
      </div>
    </div>
  );
};

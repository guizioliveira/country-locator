import React, { useState } from "react";
import { MagnifyingGlass, Backspace, CaretDown, Check } from "phosphor-react";
import { Listbox } from "@headlessui/react";
import { Country } from "../types";

interface FilterBarProps {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
  continents: Array<{
    name: string;
    code: string;
  }>;
}

export const Filterbar: React.FC<FilterBarProps> = ({
  countries,
  setCountries,
  continents
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
    <div className="w-full py-4 bg-[#202024]">
      <div className="container mx-auto flex justify-end gap-4 flex-col md:flex-row">
        <Listbox value={continentCode} onChange={setContinentCode}>
          <div className="relative">
            <Listbox.Button className="relative px-3 bg-[#29292E] min-w-full md:min-w-[200px] text-left text-white rounded-md text-sm h-10 cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8257e5] focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-[#202024]">
              <span className="block truncate">
                {continentCode ? (
                  continents.find(
                    (continent) => continent.code === continentCode
                  )!.name
                ) : (
                  <span className="text-gray-500">Filter by continent</span>
                )}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <CaretDown
                  size={20}
                  className="text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-[#29292E] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {continents.map((continent) => (
                <Listbox.Option
                  key={continent.code}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#8257e5] text-white" : "text-gray-400"
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
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#734BD1]">
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
          className="px-3 bg-[#29292E] text-white rounded-md text-sm h-10 min-w-[200px] placeholder-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8257e5] focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-[#202024]"
          type="text"
          placeholder="Filter by currency"
          onChange={(e) => setCurrencySearch(e.target.value)}
          value={currencySearch || ""}
        />
        <input
          className="px-3 bg-[#29292E] text-white rounded-md text-sm h-10 min-w-[200px] placeholder-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8257e5] focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-[#202024]"
          type="text"
          placeholder="Search by country name"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch || ""}
        />
        <button
          className="bg-[#8257e5] h-10 w-full md:w-10 rounded-md flex items-center justify-center cursor-pointer text-white md:hover:bg-[#9466ff] transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8257e5] focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-[#202024]"
          onClick={handleSearch}
        >
          <MagnifyingGlass size={22} weight="bold" />
        </button>
        <button
          className="bg-[#8257e5] h-10 w-full md:w-10 rounded-md flex items-center justify-center text-white cursor-pointer md:hover:bg-[#9466ff] transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-[#8257e5] focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-[#202024]"
          onClick={handleClearSearch}
        >
          <Backspace size={22} weight="bold" />
        </button>
      </div>
    </div>
  );
};

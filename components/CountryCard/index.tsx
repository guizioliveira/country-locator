import Link from "next/link";
import React from "react";
import { Country } from "../types";

interface CountryCardProps {
  country: Country;
  setIsLoading: () => void;
}

export const CountryCard = ({ country, setIsLoading }: CountryCardProps) => {
  const DETAILS_URL = `/country/${country.code}`;

  return (
    <Link href={DETAILS_URL}>
      <a
        onClick={setIsLoading}
        className="flex flex-col p-4 bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark rounded-md border-[1px] border-shape shadow min-h-min group sm:hover:from-primary sm:hover:to-primary sm:hover:scale-110 transition-transform transition-color focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-background"
      >
        <h2 className=" text-grayer text-left text-lg tracking-wide font-extrabold mb-2">
          {country.name}
        </h2>
        <span className="text-sm text-base-text font-light group-hover:font-bold">
          {country.continent.name}
        </span>
      </a>
    </Link>
  );
};

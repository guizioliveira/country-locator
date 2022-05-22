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
        className="transition-color group flex min-h-min flex-col rounded-md border-[1px] border-shape bg-gradient-to-r from-secundary-dark via-primary-dark to-primary-dark p-4 shadow transition-transform focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-background sm:hover:scale-110 sm:hover:from-primary sm:hover:to-primary"
      >
        <h2 className=" mb-2 text-left text-lg font-extrabold tracking-wide text-grayer">
          {country.name}
        </h2>
        <span className="text-sm font-light text-base-text md:group-hover:font-bold">
          {country.continent.name}
        </span>
      </a>
    </Link>
  );
};

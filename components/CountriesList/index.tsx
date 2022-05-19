import React from "react"
import { CountryCard } from "../CountryCard"
import { Loading } from "../Loading"
import { Country } from "../types"

export interface CountriesListProps {
  data: Country[]
  loading: boolean
  setIsLoading: () => void
}

export const CountriesList: React.FC<CountriesListProps> = ({
  data,
  loading,
  setIsLoading,
}) => {
  return (
    <div className="container mx-auto mt-96 md:mt-40 mb-6">
      <div className="flex items-center justify-center">
        {loading ? (
          <Loading />
        ) : data.length != 0 ? (
          <div className="w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 md:gap-7">
            {data.map((country, index) => (
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
  )
}

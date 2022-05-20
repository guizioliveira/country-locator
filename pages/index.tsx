import React, { useState, useEffect } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { Header, Filterbar, CountriesList } from "../components"
import { getCountries, getContinents } from "./api/CountriesAPI"
import { Continent, Country } from "../components/types"

const Home: NextPage = () => {
  const [countries, setCountries] = useState([] as Country[])
  const [unfiltered, setUnfiltered] = useState([] as Country[])
  const [continents, setContinents] = useState([] as Continent[])
  const [isLoading, setIsLoading] = useState(true)
  const [isFilterbarOpen, setIsFilterbarOpen] = useState(false)

  useEffect(() => {
    async function handlePromise() {
      const continentsAPI = await getContinents()
      const countriesAPI = await getCountries()
      setContinents(continentsAPI)
      setCountries(countriesAPI)
      setUnfiltered(countriesAPI)

      if (countriesAPI) {
        setIsLoading(false)
      }
    }
    handlePromise()
  }, [])

  return (
    <>
      <Head>
        <title>Country Locator</title>
        <meta
          name="description"
          content="Search by countries and discover their information, such as currency, capital, languages and continent"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="fixed top-0 z-10 w-full">
        <Header />
        {!isLoading && (
          <Filterbar
            isFilterbarOpen={isFilterbarOpen}
            setIsFilterbarOpen={setIsFilterbarOpen}
            setCountries={setCountries}
            countries={unfiltered}
            continents={continents}
          />
        )}
      </div>
      <CountriesList
        data={countries}
        loading={isLoading}
        isFilterbarOpen={isFilterbarOpen}
        setIsLoading={() => setIsLoading(true)}
      />
    </>
  )
}

export default Home

import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { CountryDetail, Header } from "../../components";
import { getCountries, getCountryByCode } from "../api/CountriesAPI";
import { Country } from "../../components/types";

export const getStaticPaths = async () => {
  const countries = await getCountries();
  const paths = countries.map((country: Country) => {
    return {
      params: { country: country.code },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const countryCode = context.params?.country;
  const country = await getCountryByCode(countryCode as string);
  return {
    props: {
      country,
    },
  };
};

export default function CountryDetails({ country }: { country: Country }) {
  return (
    <>
      <Head>
        <title>{country.name} Details | Country Locator</title>
        <meta
          name="description"
          content={`See all ${country.name} details such as capital, continent, currency and languages`}
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <CountryDetail country={country} />
    </>
  );
}

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      continent {
        name
        code
      }
      currency
    }
  }
`;

const COUNTRY_BY_CODE = (code: string) => gql`
{
  country(code: "${code}") {
    code
    name
    capital
    continent {
      code
      name
    }
    currency
    languages {
      code
      name
    }
  }
}
`;

const CONTINENTS_LIST = gql`
  {
    continents {
      code
      name
    }
  }
`;

// create a component that renders a select input for coutries
export function getCountries() {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  return { data, loading, error };
}

export function getCountryByCode(code: string) {
  const { data, loading, error } = useQuery(COUNTRY_BY_CODE(code), { client });
  return { data, loading, error };
}

export function getContinents() {
  const { data, loading, error } = useQuery(CONTINENTS_LIST, { client });
  return { data, loading, error };
}

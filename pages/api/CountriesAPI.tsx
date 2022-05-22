import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

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
export async function getCountries() {
  const { data } = await client.query({ query: LIST_COUNTRIES });
  return [...data.countries];
}

export async function getCountryByCode(code: string) {
  const { data } = await client.query({
    query: COUNTRY_BY_CODE(code),
  });
  return data.country;
}

export async function getContinents() {
  const { data } = await client.query({
    query: CONTINENTS_LIST,
  });
  return [...data.continents];
}

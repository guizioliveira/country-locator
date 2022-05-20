export type Country = {
  code: string
  name: string
  capital: string
  currency: string
  continent: Continent
  languages: Array<{
    name: string
  }>
}

export type Continent = {
  code: string
  name: string
}

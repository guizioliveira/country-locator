# Country Locator

![image](https://user-images.githubusercontent.com/21250477/163267768-d452fb2f-5b9b-4b55-8852-d3e243144fc3.png)

## Todo

#### 1. List of countries. This page must have

- [x] A search bar.
- [x] Filter by continent.
- [x] Filter by currency

#### 2. Detail of a country

- [x] Clicked on a country in the list redirects to a new view.

The view contains the follow country information

- [x] code
- [x] name
- [x] currency
- [x] continent
- [x] languages
- [x] capital

## Setup

1. Run `yarn install` to install all project dependencies.
2. After install, use `yarn dev` command to start the application.

## Overflow

When starting the application, the user is directed to the homepage. It will show all countries without any filter. At the top of the page, three possible search filters are shown, being them by continent, currency, and by country name. It is possible to use one or more filters at the same time.

By clicking on any of the country cards, the user will be redirected to the detail page of the chosen country. On this page, you will find the name, code, continent, capital, currency, and languages of the country.

## Routes

- `/` to access the homepage.
- `/country/details/{countryCode}` to access the detail page of the respective country.

# Algorithm Exercise

The algorithm is on the path `src/algorithm/algorithm.js`. Some tests were developed using the _Jest_ structure and they can be executed with the command `yarn test`.

Hope you like it!

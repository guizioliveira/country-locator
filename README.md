<p align="center">
  <img width="230" src="https://user-images.githubusercontent.com/21250477/169831636-40241738-bd65-4250-bf85-6e6d3eef3f67.png">
</p>

<p align="center">
 <img width="800" src="https://user-images.githubusercontent.com/21250477/169833022-43c983fa-76b0-4b17-9999-f6865c04fa4e.png">
 </p>
 
## About the project
I built this project for a job interview and after that, I created this repository to implement some feedbacks that I received throw the process. The project was build using [Next.js](https://nextjs.org/), [GraphQL](https://graphql.org/) and [TailwindCSS](https://tailwindcss.com/). Aiming at accessibility I use the [Headless UI](https://headlessui.dev/) library and keyboard navigation for all the application. In addition, the application is fully responsive and can be accessed on any device.

The idea of the project was to create an application that would return a list of countries with their respective information such as capital, continent, currency, and languages.

You can access the deployed version [Here](https://countrylocator.vercel.app).

## How it works

To get the countries data, I used the [Countries GraphQL API](https://github.com/trevorblades/countries).

When accessing the application, the user receives a list of all countries returned by the API (filtered by name). At the top of the page, three possible search filters are shown, being them by continent, currency, and by country name. It is possible to use one or more filters at the same time.

Once a country card is clicked, the user will be redirected to the detail page of the chosen country. On this page, you will find the name, code, continent, capital, currency, and languages of the country.

## Usage

```bash
# Clone this repository
git clone https://github.com/guizioliveira/country-locator.git

# Install all dependences
yarn

# Start the development server
yarn dev

# Start the production server
yarn build
yarn start
```

## Routes

- `/` to access the homepage with all countries listed.
- `/country/{countryCode}` to access the detail page of the respective country.

## Improvements

- As I am now using nextJS, I am no longer controlling the routes with `react-router-dom`, instead, I have now created all the necessary URLs using `getStaticPaths`;
- Page 404 implemented;
- Eslint implemented;
- Prettier implemented and applied on linter;
- Solid Color scheme structure with tailwind;
- Collapse filterbar on mobile version.

:star: Hope you like it!

import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import useStyles from "./styles";
import {
  Container,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Country } from "../types";

interface FilterBarProps {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
  continents: Array<{
    name: string;
    code: string;
  }>;
}

export const Filterbar: React.FC<FilterBarProps> = ({
  countries,
  setCountries,
  continents,
}) => {
  const classes = useStyles();
  const [textSearch, setTextSearch] = useState("");
  const [currencySearch, setCurrencySearch] = useState("");
  const [continentCode, setContinentCode] = useState("");

  const handleSearch = () => {
    setCountries(
      countries.filter((country) => {
        const filters = [];
        if (textSearch) {
          filters.push(
            country.name.toLowerCase().startsWith(textSearch.toLowerCase())
          );
        }
        if (currencySearch) {
          filters.push(
            country.currency
              ?.toLowerCase()
              .includes(currencySearch.toLowerCase())
          );
        }
        if (continentCode) {
          filters.push(country.continent.code === continentCode);
        }

        return filters.reduce((acc, curr) => acc && curr, true);
      })
    );
  };

  const handleClearSearch = () => {
    setCountries(countries);
    setTextSearch("");
    setCurrencySearch("");
    setContinentCode("");
  };

  const handleContinentChange = (event: SelectChangeEvent<string>) => {
    setContinentCode(event.target.value);
  };

  return (
    <div className={classes.filterBg}>
      <Container>
        <div className={classes.filterDiv}>
          <Select
            className={classes.input}
            displayEmpty
            value={continentCode}
            onChange={handleContinentChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return (
                  <em style={{ color: "#9e93cd" }}>Filter by continent</em>
                );
              }
              return continents.find(
                (continent) => continent.code === continentCode
              )!.name;
            }}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              <em>Continent</em>
            </MenuItem>
            {continents.map((continent) => (
              <MenuItem key={continent.code} value={continent.code}>
                {continent.name}
              </MenuItem>
            ))}
          </Select>
          <input
            className={classes.input}
            type="text"
            placeholder="Filter by currency"
            onChange={(e) => setCurrencySearch(e.target.value)}
            value={currencySearch || ""}
          />
          <input
            className={classes.input}
            type="text"
            placeholder="Search by country name"
            onChange={(e) => setTextSearch(e.target.value)}
            value={textSearch || ""}
          />
          <button className={classes.button} onClick={handleSearch}>
            <SearchIcon fontSize="medium" />
          </button>
          <button className={classes.button} onClick={handleClearSearch}>
            <ClearIcon fontSize="medium" />
          </button>
        </div>
      </Container>
    </div>
  );
};

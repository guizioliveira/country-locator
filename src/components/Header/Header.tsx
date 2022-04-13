import React from "react";
import { Container } from "@mui/material";

import useStyles from "./styles";

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Container>
        <a className={classes.logo} href="/">
          Country Locator
        </a>
      </Container>
    </header>
  );
};

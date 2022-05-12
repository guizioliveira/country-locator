import React from "react";
import Link from "next/link";
import { Container } from "@mui/material";

import useStyles from "./styles";

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Container>
        <Link href="/">
          <a className={classes.logo}>
            <img src="/favicon.svg" width={30} />
            Country Locator
          </a>
        </Link>
      </Container>
    </header>
  );
};

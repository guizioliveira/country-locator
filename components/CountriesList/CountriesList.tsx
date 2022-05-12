import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress
} from "@mui/material";

import useStyles from "./styles";

export interface CountriesProps {
  data: Array<{
    name: string;
    code: string;
    continent: {
      name: string;
    };
  }>;
  loading: boolean;
}

export const CountriesList: React.FC<CountriesProps> = ({ data, loading }) => {
  const classes = useStyles();
  const DETAILS_URL = "/country/details/";

  return (
    <Container>
      <Box className={classes.listBox}>
        {loading ? (
          <CircularProgress sx={{ color: "#6f4ef6" }} />
        ) : (
          <Grid container columns={{ xs: 6, md: 9, lg: 12 }} spacing={3}>
            {data.map((country, index) => (
              <Grid
                className={classes.gridItem}
                item
                key={index}
                xs={3}
                // onClick={() => navigate(`${DETAILS_URL}${country.code}`)}
              >
                <Card
                  variant="outlined"
                  elevation={0}
                  sx={{ cursor: "pointer" }}
                >
                  <CardContent className={classes.cardContent}>
                    <Typography
                      className={classes.typography}
                      sx={{ fontWeight: 900 }}
                      gutterBottom
                    >
                      {country.name}
                    </Typography>
                    <Typography
                      className={classes.typography}
                      variant="body2"
                      color="text.secondary"
                    >
                      {country.continent.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

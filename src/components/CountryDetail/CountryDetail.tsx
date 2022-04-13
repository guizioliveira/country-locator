import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  Container,
  Typography,
  CircularProgress,
  CardContent,
} from "@mui/material";
import { ApolloError } from "@apollo/client";
import CodeIcon from "@mui/icons-material/Code";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PaidIcon from "@mui/icons-material/Paid";
import LanguageIcon from "@mui/icons-material/Language";
import useStyles from "./styles";

export interface Country {
  data: {
    country: {
      code: string;
      name: string;
      capital: string;
      currency: string;
      continent: {
        name: string;
      };
      languages: Array<{
        name: string;
      }>;
    };
  };
  error: ApolloError | undefined;
  loading: boolean;
}

export const CountryDetail: React.FC<Country> = ({ data, loading, error }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [loading]);

  return (
    <>
      {isLoading ? (
        <Container maxWidth="lg" sx={{ marginTop: "calc(3rem + 25px)" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ color: "#6f4ef6" }} />
          </Box>
        </Container>
      ) : (
        <>
          <div className={classes.titleBg}>
            <Container
              maxWidth="lg"
              sx={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Typography className={classes.title} variant="h3">
                {data.country.name}
              </Typography>
            </Container>
          </div>
          <Container className={classes.aboutSection}>
            <Typography paragraph className={classes.subtitle} variant="h5">
              About
            </Typography>
            <Grid container columns={{ xs: 6, md: 9, lg: 12 }} spacing={3}>
              <Grid item xs={6}>
                <Card variant="outlined" elevation={0}>
                  <CardContent className={classes.cardContent}>
                    <Grid container columns={{ xs: 12 }}>
                      <Grid className={classes.iconGrid} item xs={2}>
                        <CodeIcon className={classes.icon} fontSize="large" />
                      </Grid>
                      <Grid className={classes.infoGrid} item xs={10}>
                        <Typography
                          className={classes.infoTitle}
                          variant="body1"
                        >
                          {data.country.code}
                        </Typography>
                        <Typography
                          className={classes.text}
                          variant="body2"
                          color="text.secondary"
                        >
                          Code
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card variant="outlined" elevation={0}>
                  <CardContent className={classes.cardContent}>
                    <Grid container columns={{ xs: 12 }}>
                      <Grid className={classes.iconGrid} item xs={2}>
                        <PublicIcon className={classes.icon} fontSize="large" />
                      </Grid>
                      <Grid className={classes.infoGrid} item xs={10}>
                        <Typography
                          className={classes.infoTitle}
                          variant="body1"
                        >
                          {data.country.continent.name}
                        </Typography>
                        <Typography
                          className={classes.text}
                          variant="body2"
                          color="text.secondary"
                        >
                          Continent
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card variant="outlined" elevation={0}>
                  <CardContent className={classes.cardContent}>
                    <Grid container columns={{ xs: 12 }}>
                      <Grid className={classes.iconGrid} item xs={2}>
                        <LocationCityIcon
                          className={classes.icon}
                          fontSize="large"
                        />
                      </Grid>
                      <Grid className={classes.infoGrid} item xs={10}>
                        <Typography
                          className={classes.infoTitle}
                          variant="body1"
                        >
                          {data.country.capital
                            ? data.country.capital
                            : "Not Informed"}
                        </Typography>
                        <Typography
                          className={classes.text}
                          variant="body2"
                          color="text.secondary"
                        >
                          Capital
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card variant="outlined" elevation={0}>
                  <CardContent className={classes.cardContent}>
                    <Grid container columns={{ xs: 12 }}>
                      <Grid className={classes.iconGrid} item xs={2}>
                        <PaidIcon className={classes.icon} fontSize="large" />
                      </Grid>
                      <Grid className={classes.infoGrid} item xs={10}>
                        <Typography
                          className={classes.infoTitle}
                          variant="body1"
                        >
                          {data.country.currency
                            ? data.country.currency?.split(",").join(", ")
                            : "Not Informed"}
                        </Typography>
                        <Typography
                          className={classes.text}
                          variant="body2"
                          color="text.secondary"
                        >
                          Currency
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card variant="outlined" elevation={0}>
                  <CardContent className={classes.cardContent}>
                    <Grid container columns={{ xs: 12 }}>
                      <Grid className={classes.iconGrid} item xs={2}>
                        <LanguageIcon
                          className={classes.icon}
                          fontSize="large"
                        />
                      </Grid>
                      <Grid className={classes.infoGrid} item xs={10}>
                        <Typography
                          className={classes.infoTitle}
                          variant="body1"
                        >
                          {data.country.languages.length > 0
                            ? data.country.languages
                                .map((language) => language.name)
                                .join(", ")
                            : "Not Informed"}
                        </Typography>
                        <Typography
                          className={classes.text}
                          variant="body2"
                          color="text.secondary"
                        >
                          Language
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

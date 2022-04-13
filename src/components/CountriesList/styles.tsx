import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  listBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "calc(6rem + 50px)",
    marginBottom: "25px",
    ["@media (max-width: 768px)"]: {
      marginTop: "calc(15rem + 50px)",
    },
  },

  gridItem: {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  cardContent: {
    "&:hover": {
      backgroundColor: "var(--color-primary-light)",
      "& p": {
        color: "white",
      },
    },
  },

  typography: {
    fontFamily: "var(--primary-font-family) !important",
  },
}));

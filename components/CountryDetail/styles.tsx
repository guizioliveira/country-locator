import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  titleBg: {
    width: "100%",
    marginTop: "3rem",
    backgroundColor: "var(--color-primary-background)",
  },

  title: {
    fontFamily: "var(--primary-font-family) !important",
    color: "white",
    fontWeight: "500 !important",
    ["@media (max-width: 768px)"]: {
      fontSize: "2rem !important",
    },
  },

  aboutSection: {
    margin: "2rem 0",
  },

  subtitle: {
    fontFamily: "var(--primary-font-family) !important",
    fontWeight: "500 !important",
    borderBottom: "1px solid var(--color-primary-lighter)",
    color: "var(--color-primary-light)",
  },

  text: { fontFamily: "var(--primary-font-family) !important" },

  infoTitle: {
    fontFamily: "var(--primary-font-family) !important",
    fontWeight: "900 !important",
    fontSize: "1.2rem !important",
  },

  cardContent: {
    paddingLeft: "0 !important",
  },

  iconGrid: {
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #9c86f924",
    display: "flex",
  },

  icon: {
    fill: "var(--color-primary-light) !important",
  },

  infoGrid: {
    paddingLeft: "1rem !important",
  },
}));

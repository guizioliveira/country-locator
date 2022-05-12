import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    height: "3rem",
    backgroundColor: "var(--color-primary-light)",
    color: "var(--color-primary-text)",
    zIndex: 1,
  },

  logo: {
    fontWeight: 800,
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
  },
}));

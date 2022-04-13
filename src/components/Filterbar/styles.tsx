import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  filterDiv: {
    display: "flex",
    justifyContent: "end",
    gap: "1rem",
    ["@media (max-width: 768px)"]: {
      flexDirection: "column",
    },
  },

  button: {
    backgroundColor: "var(--color-primary-light)",
    color: "var(--color-primary-text)",
    cursor: "pointer",
    border: "none",
    padding: "0 0.8rem",
    borderRadius: "5px",
  },

  input: {
    padding: "0 0.8rem",
    backgroundColor: "var(--color-primary-input)",
    borderRadius: "5px !important",
    color: "white !important",
    caretColor: "#9c86f9",
    height: "40px",
    minWidth: "200px",
    boxSizing: "border-box",
    fontSize: "14px !important",
    fontFamily: "var(--primary-font-family) !important",
    "&::-webkit-input-placeholder": {
      color: "#9e93cd",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
    "& svg": {
      fill: "#9c86f9",
    },
    "& div": {
      padding: "0 !important",
    },
  },

  filterBg: {
    backgroundColor: "var(--color-primary-background)",
    padding: "1rem",
    width: "100%",
    position: "fixed",
    top: "3rem",
    zIndex: 1,
  },
}));

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  input: {
    width: "100%",
    padding: "0 4px",
  },

  box: {
    padding: 16,
  },

  header: {
    position: "fixed",
  },

  paper: {
    padding: 16,
  },
  methodWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: 128,
  },
  result: {
    minHeight: 64,
    overflowX: "auto",
  },
});

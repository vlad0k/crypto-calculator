import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const Header = () => {
  const styles = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Crypto Calculator</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

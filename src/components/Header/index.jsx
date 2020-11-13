import React from 'react';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Crypto Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline, Grid } from '@material-ui/core';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} styles={{ width: '100%' }}>
        <Grid item sx={12} md={4}>
          <List />
        </Grid>
        <Grid item sx={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default App;

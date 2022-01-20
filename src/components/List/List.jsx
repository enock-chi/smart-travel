import { React, useState, useEffect, createRef } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked, isLoading , type, setType, rating, setRating}) => {
  const classes = useStyles();
  const [elrefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places.length)
      .fill()
      .map((_, i) => refs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <React.Fragment>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setType(e.target.value)}>
              <MenuItem value={0}>all</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spaciing={3} classname={classes.list}>
            {places &&
              places.map((place, i) => (
                <Grid item key={i} xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={number(childClicked) == i}
                    refProp={elrefs[i]}
                  />
                </Grid>
              ))}
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
};

export default List;

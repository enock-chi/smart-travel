import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import locationOnIcon from '@material-ui/icons/LocationOn';
import phoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if(selected){
    refProp && refProp.current && refProp.current.scrollIntoView({behavior: 'smooth', block : 'start'})
  }

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBmttom variant="subtitle1">
            Out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1"> Price </Typography>
          <Typography gutterBmttom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1"> Ranking </Typography>
          <Typography gutterBmttom variant="subtitle1">
            {place.price_ranking}
          </Typography>
        </Box>
        {place &&
          place.awards.map((award) => (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={1}
            >
              <img src={award.images.small} alt={award.display_names} />
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_names}
              </Typography>
            </Box>
          ))}
        {place &&
          place.cuisine &&
          place.cuisine.map(({ name }) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            />
          ))}
        {place && place.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <locationOnIcon /> {place.address}{' '}
          </Typography>
        )}
        {place && place.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <phoneIcon /> {place.phone}{' '}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, '_blank')}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, '_blank')}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;

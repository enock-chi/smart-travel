// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'f96ff5574dmsh3c5171680c13d86p1bb3bfjsn1011f11fd00c',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

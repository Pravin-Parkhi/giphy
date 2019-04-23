import axios from 'axios';
import { getGifsSuccess, getGifsFailure } from '../actions/app';

export function getGifs(dispatch, params) {
  let url = `http://api.giphy.com/v1/gifs/search?api_key=FLsPlhfbBHljrQ8KQPlh5utn0AdxseZM&q=${params.searchQuery}`;
  axios.get(
    url,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then(response => {
    const successResponse = response.data;
    dispatch(getGifsSuccess(successResponse));
  })
  .catch(error => {
    if (error) {
      const errorResponse = error.response;
      dispatch(getGifsFailure(errorResponse));
    }
  });
};
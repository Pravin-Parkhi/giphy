import axios from 'axios';
import { getGifsSuccess, getGifsFailure } from '../actions/app';

const apiEndPoint = 'http://api.giphy.com/v1/gifs'
const apiKey = 'FLsPlhfbBHljrQ8KQPlh5utn0AdxseZM'

export function getGifs(dispatch, params) {
  const { searchQuery, offset, limit } = params;
  let url = `${apiEndPoint}/search?api_key=${apiKey}&q=${searchQuery}&offset=${offset}&limit=${limit}`;
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
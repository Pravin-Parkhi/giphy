import ActionTypes from '../constants/action-type';

import { getGifs , getTags} from '../utils/api';

// get gifs
export function fetchGifs(params) {
  return(dispatch)=> {
    getGifs(dispatch, params);
  }
}

export function getGifsSuccess(response) {
  return {
    type: ActionTypes.GET_GIFS_SUCCESS,
    response
  }
}

export function getGifsFailure(response) {
  return {
    type: ActionTypes.GET_GIFS_FAILURE,
    response
  }
}
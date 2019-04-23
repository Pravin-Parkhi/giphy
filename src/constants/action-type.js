import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'GET_GIFS_SUCCESS',
  'GET_GIFS_FAILURE'
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);
import ActionType from '../constants/action-type';

export const initialState =  {
  gifs: []
};

const app = (state=initialState, action)=> {

  if (!action.type) {
    console.log('Payload missing a type!', action);
  }
  
  switch (action.type) {

    // gifs
    case ActionType.GET_GIFS_SUCCESS: {
      return {
        ...state,
        gifs: action.response
      };
    }
    case ActionType.GET_GIFS_FAILURE: {
      return {
        ...state,
        gifs: action.response
      };
    }

    default:{
      return state;
    }
  };

};

export default app;

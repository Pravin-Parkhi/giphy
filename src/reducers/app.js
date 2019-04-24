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
      let gifsCopy = JSON.parse(JSON.stringify(state.gifs))
      let newGifsCopy = gifsCopy.concat(action.response.data)
      return {
        ...state,
        gifs: newGifsCopy,
        totalCount: action.response.pagination.total_count
      };
    }
    case ActionType.GET_GIFS_FAILURE: {
      return {
        ...state,
        gifs: action.response
      };
    }
    case ActionType.CLEAR_GIFS: {
      return {
        ...state,
        gifs: [],
        totalCount: 0
      };
    }

    default:{
      return state;
    }
  };

};

export default app;

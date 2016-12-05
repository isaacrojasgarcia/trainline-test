import { SHOW_JOURNEY, SHOW_JOURNEY_ERROR } from '../config/constants';

const initialState = {
  journey: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SHOW_JOURNEY:
      return {
        ...state,
        journey: action.payload
      };

    case SHOW_JOURNEY_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
}

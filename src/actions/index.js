import { SHOW_JOURNEY, SHOW_JOURNEY_ERROR } from '../config/constants';
import { journeySvc } from '../services';

export function loadJourney(journey) {
  const req = journeySvc.getJourney(journey);
  return (dispatch) => {
    return req
      .then(response => {
        dispatch({
          type: SHOW_JOURNEY,
          payload: response
        });
      })
      .catch(err => {
        dispatch({
          type: SHOW_JOURNEY_ERROR,
          payload: err
        });
      })
  }
}

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

import journey from '../../data/ldb.json';
import { loadJourney } from '../actions';
import { journeySvc } from '../services';
import { SHOW_JOURNEY } from '../config/constants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const defJourney = {
  origin: 'Farringdon',
  destination: 'West Hampstead Thameslink'
};

describe('Async actions', () => {
  it('Should trigger an action to get a Journey', () => {
    const dispatch = sinon.spy(store, 'dispatch');

    const expectedAction = {
      type: SHOW_JOURNEY,
      payload: journey
    }

    return store.dispatch(loadJourney(defJourney))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(expectedAction);
        expect(dispatch.calledOnce).toBeTrue;
      });
  });
});

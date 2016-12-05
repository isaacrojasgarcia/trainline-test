import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import JourneyContainer from './containers/JourneyContainer';

const ORIGIN = 'Farringdon';
const DESTINATION = 'West Hampstead Thameslink';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <JourneyContainer origin={ ORIGIN } destination={ DESTINATION } />
      </Provider>
    );
  }
}

export default App;

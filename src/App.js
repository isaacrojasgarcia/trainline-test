import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import JourneyContainer from './containers/JourneyContainer';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <JourneyContainer />
      </Provider>
    );
  }
}

export default App;

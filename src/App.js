import React, { Component } from 'react';

import { journeySvc } from './services';

class App extends Component {
  componentDidMount() {
    journeySvc
      .getJourney('Farringdon', 'West Hampstead Thameslink')
      .then(response => console.log(response));
  }

  render() {
    return (
      <div>Test</div>
    );
  }
}

export default App;

import React, { Component } from 'react';

export default class Journey extends Component {
  _renderJourney() {
    const { journey } = this.props;
    if(journey && journey.data) {
      return (
        <div> { journey.data.checkedAt}</div>
      );
    }
    else {
      return (<div>Loading</div>);
    }
  }

  render() {
    const { origin, destination } = this.props;
    return (
      <div>
        <div>Origin; { origin }</div>
        <div>Destination; { destination }</div>
        <div>{ this._renderJourney() }</div>
      </div>
    );
  }
}

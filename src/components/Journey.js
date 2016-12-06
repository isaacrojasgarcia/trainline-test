import React, { Component } from 'react';
import Point from './Point';

export default class Journey extends Component {
  _renderJourney() {
    const { journey } = this.props;
    if(journey && journey.data) {
      const callingPoints = journey.data.callingPoints;
      return (
        <div>
          <div> { journey.data.checkedAt }</div>
          {
            callingPoints.map((point, index) => {
              return <Point point={ point } key={ index }/>
            })
          }
        </div>
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
        <div className='origin'>{ origin }</div>
        <div className='destination'>To { destination }</div>
        <div>Operated by Thameslink</div>
        { this._renderJourney() }
      </div>
    );
  }
}

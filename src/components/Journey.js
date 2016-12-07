import React, { Component } from 'react';
import Point from './Point';

export default class Journey extends Component {
  _renderJourney() {
    const { journey } = this.props;
    if(journey && journey.data) {
      const callingPoints = journey.data.callingPoints;
      return (
        <div className='points-container'>
          {
            callingPoints.map((point, index) => {
              return <Point point={ point } key={ index }/>
            })
          }
        </div>
      );
    }
    else {
      return (
        <div className='w3-row w3-center'>
          <i className='fa fa-spinner fa-spin fa-3x fa-fw' />
          <span className='sr-only'>Loading...</span>
        </div>);
    }
  }

  render() {
    const { origin, destination } = this.props;
    return (
      <div className='journey'>
        <div className='w3-row'>
          <div className='w3-col s3 train-logo'>
            <i className='fa fa-train fa-3x' aria-hidden='true'></i>
          </div>
          <div className='w3-col s9'>
            <div className='journey-origin'>{ origin }</div>
            <div className='journey-destination'><span>to </span>{ destination }</div>
            <div className='journey-operator'>Operated by Thameslink</div>
          </div>
        </div>
        <div className='w3-row'>
          { this._renderJourney() }
        </div>
      </div>
    );
  }
}

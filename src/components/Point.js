import React, { Component } from 'react';

const onTime = 'On time';

export default class Point extends Component {
  _renderStationStatus() {
    const { point } = this.props;
    if(point.isTrainHere) {
        return(
          <div>
            <span className='fa-stack fa-lg green'>
              <i className='fa fa-circle fa-stack-2x'></i>
              <i className='fa fa-train fa-stack-1x fa-inverse'></i>
            </span>
          </div>);
    }

    return(
      <div className={ point.hasDeparted && !(point.isOrigin || point.isDestination) ? '' : 'black' }>
        <i className='fa fa-circle'></i>
      </div>
    );
  }

  _renderStation() {
    const { point } = this.props;
    const estimatedAt = point.estimatedAt;

    return (
      <div className='time'>
      {
        (estimatedAt === onTime ? '' : (point.hasDeparted ? 'Dept. ' : 'Exp. ') )+ estimatedAt
      }
      </div>
    );
  }

  render() {
    const { point } = this.props;
    const css = 'w3-row ' + (point.hasDeparted ? '' : 'point-not-departed');

    return (
      <div className={ css }>
        <div className='point-scheduled w3-col s3 w3-center'>
          <b>{ point.scheduledAt } </b>
        </div>

        <div className='point-status w3-col s3 w3-center'>
          { this._renderStationStatus() }
        </div>

        <div className='point-station w3-col s6'>
          <div><b>{ point.station } </b></div>
          { this._renderStation() }
        </div>
      </div>
    );
  }

}

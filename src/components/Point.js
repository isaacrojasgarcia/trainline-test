import React, { Component } from 'react';
import { point as styles } from '../styles';

const onTime = 'On time';

export default class Point extends Component {
  _renderStationStatus() {
    const { point } = this.props;
    if(point.isTrainHere) {
        return(<div>Train here</div>);
    }

    return(<div></div>);
  }

  _renderStation() {
    const { point } = this.props;
    const estimatedAt = point.estimatedAt;

    console.log('==>', estimatedAt === onTime)

    return (
      <div>
      {
        (estimatedAt === onTime ? '' : (point.hasDeparted ? 'Dept.' : 'Exp.') )+ estimatedAt
      }
      </div>
    );
  }

  render() {
    const { point } = this.props;
    const departedStyles = point.hasDeparted ? {} : styles.departed;

    return (
      <div style={ styles.container }>
        <div style={ { ...styles.schedule, ...departedStyles } }> { point.scheduledAt } </div>

        <div style={ styles.pointStatus}>
          { this._renderStationStatus() }
        </div>

        <div style={ styles.station }>
          <div style={ departedStyles } > { point.station } </div>
          { this._renderStation() }
        </div>
      </div>
    );
  }

}

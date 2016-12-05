import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadJourney } from '../actions';

class JourneyContainer extends Component {
  constructor(props) {
    super(props);
    this.props.loadJourney({});
  }

  render() {
    return (
      <div>Journey Container</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    journey: state.journey
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadJourney: journey => dispatch(loadJourney(journey))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JourneyContainer);

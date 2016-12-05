import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadJourney } from '../actions';
import Journey from '../components/Journey';

class JourneyContainer extends Component {
  constructor(props) {
    super(props);
    this.props.loadJourney({});
  }

  render() {
    const props = this.props;
    return (
      <Journey { ...props }  />
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

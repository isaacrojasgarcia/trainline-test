import React from 'react';
import Point from './Point';
import journey from '../../data/ldb.json';
import { shallow } from 'enzyme';


const onTimePoint = journey.data.callingPoints[1];
const hasDepartedPoint = journey.data.callingPoints[3];
const scheduledPoint = journey.data.callingPoints[ journey.data.callingPoints.length - 1];

function setup(point = journey.data.callingPoints[0]) {
  const attrs = {
    point: point
  };

  const component = shallow(<Point { ...attrs } />);

  return {
    component,
    attrs,
    pointStatus: component.find('.point-status')
  }
}

describe('Point Component', () => {
  it('Should exists', () => {
    const { component } = setup();

    expect(component).toBeDefined;
  });

  it('Should show has "On time" message', () => {
    const { pointStatus } = setup(onTimePoint);

    expect(pointStatus.text()).toEqual('On time');
  });

  it('Should show has "Dept." message', () => {
    const { pointStatus } = setup(hasDepartedPoint);

    expect(pointStatus.text()).toEqual('Dept. ' + hasDepartedPoint.estimatedAt);
  });

  it('Should show has "Exp." message', () => {
    const { pointStatus } = setup(scheduledPoint);

    expect(pointStatus.text()).toEqual('Exp. ' + scheduledPoint.estimatedAt);
  });
});

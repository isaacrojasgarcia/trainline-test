import React from 'react';
import Journey from './Journey';
import Point from './Point';
import journey from '../../data/ldb.json';
import { shallow } from 'enzyme';

function setup() {
  const attrs = {
    origin: 'Farringdon',
    destination: 'West Hampstead Thameslink',
    journey
  };

  const component = shallow(<Journey { ...attrs } />);

  return {
    component,
    attrs,
    origin: component.find('.origin'),
    destination: component.find('.destination'),
    points: component.find(Point)
  }
}

describe('Jouney Component', () => {
  it('Should show the origin and destination', () => {
    const { component, origin, destination, attrs } = setup();

    expect(origin).toExists;
    expect(destination).toExists;

    expect(origin.text()).toEqual(attrs.origin);
    expect(destination.text()).toEqual('To ' + attrs.destination);
  });

  it('Should show N Points', () => {
    const { points } = setup();

    expect(points.length).toEqual(journey.data.callingPoints.length);
  });
});

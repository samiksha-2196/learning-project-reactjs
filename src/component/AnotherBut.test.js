//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import AnotherBut from './AnotherBut.js';
test('AnotherBut when clicked',()=>{
    const component = renderer.create(<AnotherBut addTrip={true}/>);
    let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

}

)
import React from 'react';
import renderer from 'react-test-renderer';
import WordCounter from '../WordCounter';

describe('A counter', () => {
  it('Displays the count and label', () => {
    const counter = renderer.create(<WordCounter legend="Count" count={34} />);
    expect(counter.toJSON()).toMatchSnapshot();

  });
});

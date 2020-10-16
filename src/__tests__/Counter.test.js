/***
 * Excerpted from "React for Real",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/lfreact for more book information.
***/
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter';

describe('A counter', () => {
  it('Displays the count and label', () => {
    const counter = renderer.create(<Counter legend="Count" count={34} />);
    expect(counter.toJSON()).toMatchSnapshot();

  });
});

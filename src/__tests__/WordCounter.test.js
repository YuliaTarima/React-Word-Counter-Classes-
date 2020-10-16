import React from 'react';
import { shallow } from 'enzyme';
import WordCounter from '../WordCounter';
import countWords from '../countWords';
import Editor from '../Editor';
import ProgressBar from '../ProgressBar';

describe('When I type some words', () => {
  const target = 10;
  const inputString = 'One two three four';
  const wordCounter = shallow(<WordCounter targetWordCount={target} />);
  const textarea = wordCounter.find(Editor).dive().find('textarea');
  textarea.simulate('change', { target: { value: inputString } });

  it('displays the correct count as a number', () => {
    const counter = wordCounter.find(WordCounter);
    expect(counter.prop('count')).toBe(countWords(inputString));
  });
  it('displays the correct progress', () => {
    const progressBar = wordCounter.find(ProgressBar);
    expect(progressBar.prop('completion')).toBe(
      countWords(inputString) / target
    );
  });
});

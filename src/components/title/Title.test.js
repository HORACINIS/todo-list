import { render } from '@testing-library/react';
import Title from './Title';
import ReactDOM from 'react-dom'

it('title renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Title />, div);
});

it('should render the title; My To-do List App v.0.2.1', () => {
  const { getByTestId } = render(<Title />);
  const titleElement = getByTestId('title');
  expect(titleElement.textContent).toBe('My To-do List App v.0.2.1');
});


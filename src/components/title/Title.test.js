import { render } from '@testing-library/react';
import Title from './Title';
import ReactDOM from 'react-dom';

describe('<Title />', () => {

  it('renders <Title /> without crashing', () => {
    const root = document.createElement('div');
    ReactDOM.render(<Title />, root);
  });

  it('should render the title; My To-do List App v.0.2.1', () => {
    const { getByTestId } = render(<Title />);
    const titleElement = getByTestId('title');
    expect(titleElement.textContent).toBe('My To-do List App v.0.2.1');
  });
});



import InputTextBar from './InputTextBar';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

describe('<InputTextBar />', () => {
  
  it('renders the Add button with its name correctly', () => {
    const root = document.createElement('div');
    ReactDOM.render(<InputTextBar />, root);
    const addBtn = root.querySelector('button');
    expect(addBtn.textContent).toBe('Add');
  });

  it('renders the text input element with with no text value', () => {
    const { getByTestId } = render(<InputTextBar />);
    const inputElement = getByTestId('text-input');
    expect(inputElement.textContent).toBeFalsy();
  });
});

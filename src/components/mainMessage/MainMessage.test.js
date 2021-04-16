import { render } from '@testing-library/react';
import MainMessage from './../mainMessage/MainMessage';

it("check MainMessage displays the prop value it's passed in to it; 'Create a To-do!'", () => {
  const { getByTestId } = render(<MainMessage messageToDisplay='Create a To-do!' />)
  const messageValue = getByTestId('main-message-id')

  expect(messageValue.textContent).toBe('Create a To-do!')

});


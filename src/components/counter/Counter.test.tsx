import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import user from '@testing-library/user-event';

describe('Counter', () => {
  test('render correctly', () => {
    render(<Counter />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(buttonElement).toBeInTheDocument();

    const headingElementValue = screen.getByRole('heading');
    expect(headingElementValue).toHaveTextContent('0');
  });

  test('Button Increment the value', async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.click(buttonElement);
    const headingElementValue = screen.getByRole('heading');
    expect(headingElementValue).toHaveTextContent('1');
  });
  test('Set button set the input value', async () => {
    user.setup();
    render(<Counter />);
    const inputElementValue = screen.getByRole('spinbutton');

    await user.type(inputElementValue, '10');
    expect(inputElementValue).toHaveValue(10);

    const setButton = screen.getByRole('button', {
      name: 'Set',
    });

    await user.click(setButton);
    const headingElementValue = screen.getByRole('heading');
    expect(headingElementValue).toHaveTextContent('10');
  });
});

import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  test('Greet render correctly', () => {
    render(<Greet />);

    const textElement = screen.getByText(/greet/i);
    expect(textElement).toBeInTheDocument();
  });
  test('Greet with Name', () => {
    render(<Greet name='Ahsan' />);
    const textElement = screen.getByText('Greet Ahsan');
    expect(textElement).toBeInTheDocument();
  });
});

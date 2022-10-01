import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('Renders correctly', () => {
    render(<Application />);
    const textElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(textElement).toBeInTheDocument();

    const textElement2 = screen.getByLabelText('Name');
    expect(textElement2).toBeInTheDocument();

    const textElement3 = screen.getByPlaceholderText('FullName');
    expect(textElement3).toBeInTheDocument();

    const textElement4 = screen.getByDisplayValue('Ahsan');
    expect(textElement4).toBeInTheDocument();

    const imgElement = screen.getByAltText('a person with a laptop');
    expect(imgElement).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    const textAreaElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(textAreaElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('checkbox');
    expect(buttonElement).toBeInTheDocument();
  });
});

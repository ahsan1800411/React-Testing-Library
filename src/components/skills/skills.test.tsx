import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('render a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItem = screen.getAllByRole('listitem');
    expect(listItem).toHaveLength(skills.length);
  });
  test('Start Learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole('button', {
      name: 'Start learning',
    });
    expect(startLearningButton).toBeInTheDocument();
  });
});

describe('first heading find', () => {
  test('find', () => {
    render(<Skills />);
    const heading = screen.getByText((content) =>
      content.startsWith('Programmers')
    );
    expect(heading).toBeInTheDocument();
  });

  test('button start learning is not in the document', () => {
    const learningButton = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(learningButton).not.toBeInTheDocument();
  });
});

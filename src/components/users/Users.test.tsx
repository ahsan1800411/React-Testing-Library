import { screen, render } from '@testing-library/react';
import { Users } from './Users';
import { server } from './../../mocks/server';
import { rest } from 'msw';

describe('Users', () => {
  test('Api response', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');

    expect(users).toHaveLength(3);
  });

  test('renders errors', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const errorText = await screen.findByText('Error fetching users');
    expect(errorText).toBeInTheDocument();
  });
});

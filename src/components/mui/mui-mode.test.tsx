import { render, screen } from '../../test-utils';
import { MuiMode } from './mui-mode';

describe('Mui Mode', () => {
  test('Under Providers works', () => {
    render(<MuiMode />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('dark mode');
  });
});

import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('should render', () => {
    render(<Home />);
    const inputName = screen.getByTestId('name');
    const inputAddress = screen.getByTestId('address');
    expect(inputName).toBeInTheDocument();
    expect(inputAddress).toBeInTheDocument();
  });

  // it('submit form', () => {

  // })
});

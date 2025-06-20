import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { act } from 'react-dom/test-utils';

// Mock react-scroll
jest.mock('react-scroll', () => ({
  Link: ({ children, to }) => <a href={`#${to}`}>{children}</a>
}));

describe('Header component', () => {
  test('renders logo and text', () => {
    render(<Header />);
    const logoImage = screen.getByAltText(/kryptic tha don logo/i);
    const title = screen.getByText(/KRYPTIC THA DON/i);
    expect(logoImage).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Lease Beats')).toBeInTheDocument();
    expect(screen.getByText('Credits')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
  test('renders current year and copyright', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    const text = screen.getByText(`Kryptic Tha Don © ${year}`);
    expect(text).toBeInTheDocument();
  });
});

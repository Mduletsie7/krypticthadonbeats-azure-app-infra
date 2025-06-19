import React from 'react';
import { render, screen } from '@testing-library/react';
import Discography from '../components/Discography';

jest.mock('../assets/ForeverBlessed.jpg', () => '');
jest.mock('../assets/vinyl.jpg', () => '');

describe('Discography component', () => {
  test('renders section title', () => {
    render(<Discography />);
    expect(screen.getByText(/Discography/i)).toBeInTheDocument();
  });

  test('renders album titles and years', () => {
    render(<Discography />);
    expect(screen.getByText('Forever Blessed')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.getByText('Album 2')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  test('renders correct number of album elements', () => {
    render(<Discography />);
    const albums = screen.getAllByRole('img');
    expect(albums.length).toBe(2);
  });
});

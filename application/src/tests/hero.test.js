// Hero.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../components/Hero'; // Adjust path to your Hero component

describe('Hero Component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  describe('Component Rendering', () => {
    test('renders without crashing', () => {
      const heroSection = screen.getByRole('region');
      expect(heroSection).toBeInTheDocument();
    });

    test('renders hero section with correct structure', () => {
      const heroSection = screen.getByRole('region');
      expect(heroSection).toHaveClass('hero');
      
      const heroContent = heroSection.querySelector('.hero-content');
      expect(heroContent).toBeInTheDocument();
      
      const heroText = heroSection.querySelector('.hero-text');
      expect(heroText).toBeInTheDocument();
    });
  });

  describe('Content Display', () => {
    test('displays the main heading with correct text and styling', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Kryptic Tha Don');
      
      // Check for the span with special styling
      const krypticSpan = screen.getByText('Kryptic');
      expect(krypticSpan).toBeInTheDocument();
      expect(krypticSpan).toHaveClass('herotxt-kryptic');
    });

    test('displays the description paragraph', () => {
      const description = screen.getByText(/Music Producer from Cape Town, South africa with a passion for Hip-Hop/i);
      expect(description).toBeInTheDocument();
      expect(description.tagName).toBe('P');
    });

    test('contains correct text content', () => {
      expect(screen.getByText('Tha Don')).toBeInTheDocument();
      expect(screen.getByText('Music Producer from Cape Town, South africa with a passion for Hip-Hop.')).toBeInTheDocument();
    });
  });

  describe('CSS Classes', () => {
    test('applies correct CSS classes to elements', () => {
      const heroSection = screen.getByRole('region');
      expect(heroSection).toHaveClass('hero');
      
      const heroContent = heroSection.querySelector('.hero-content');
      expect(heroContent).toHaveClass('hero-content');
      
      const heroText = heroSection.querySelector('.hero-text');
      expect(heroText).toHaveClass('hero-text');
      
      const krypticSpan = screen.getByText('Kryptic');
      expect(krypticSpan).toHaveClass('herotxt-kryptic');
    });
  });

  describe('Accessibility', () => {
    test('uses semantic HTML elements', () => {
      const section = screen.getByRole('region');
      expect(section.tagName).toBe('SECTION');
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading.tagName).toBe('H1');
    });

    test('heading has proper hierarchy', () => {
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
      
      // Ensure there are no other heading levels that might break hierarchy
      const allHeadings = screen.getAllByRole('heading');
      expect(allHeadings).toHaveLength(1);
    });
  });

  describe('Component Structure', () => {
    test('maintains expected DOM structure', () => {
      const heroSection = screen.getByRole('region');
      const heroContent = heroSection.querySelector('.hero-content');
      const heroText = heroContent.querySelector('.hero-text');
      const heading = heroText.querySelector('h1');
      const paragraph = heroText.querySelector('p');
      
      expect(heroContent).toBeInTheDocument();
      expect(heroText).toBeInTheDocument();
      expect(heading).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
    });

    test('heading contains both span and text content', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      const span = heading.querySelector('span.herotxt-kryptic');
      
      expect(span).toBeInTheDocument();
      expect(span.textContent).toBe('Kryptic');
      expect(heading.textContent).toBe('Kryptic Tha Don');
    });
  });

  describe('Props and State', () => {
    test('component works without props', () => {
      // This test ensures the component doesn't require props
      expect(() => render(<Hero />)).not.toThrow();
    });
  });
});

// Additional test for CSS import (optional - requires more setup)
describe('Hero Component CSS', () => {
  test('CSS file is imported', () => {
    // This is more of an integration test
    // You might want to test actual styles in a different way
    const heroSection = screen.getByRole('region');
    expect(heroSection).toHaveClass('hero');
  });
});

// Snapshot test (optional)
describe('Hero Component Snapshots', () => {
  test('matches snapshot', () => {
    const { container } = render(<Hero />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('Language Toggle Integration', () => {
  it('renders the page with default English content', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Senior Software Architect & AI Backend Engineer/i,
      })
    ).toBeInTheDocument();
  });

  it('switches all visible text to Portuguese when locale is toggled', () => {
    render(<App />);

    // Find the desktop language toggle button
    const toggleBtn = screen.getByLabelText('Toggle language');
    fireEvent.click(toggleBtn);

    // Verify Portuguese content appears
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Arquiteto de Software Sênior & Engenheiro Backend de IA/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /LinkedIn/i }).some((link) =>
        link.getAttribute('href') === '#recommendations'
      )
    ).toBe(true);
    expect(screen.getByRole('link', { name: /Stack/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Experiência/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Educação/i })).toBeInTheDocument();
  });

  it('toggles back to English on second click', () => {
    render(<App />);

    const toggleBtn = screen.getByLabelText('Toggle language');
    fireEvent.click(toggleBtn); // → PT
    fireEvent.click(toggleBtn); // → EN

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Senior Software Architect & AI Backend Engineer/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /LinkedIn/i }).some((link) =>
        link.getAttribute('href') === '#recommendations'
      )
    ).toBe(true);
    expect(screen.getByRole('link', { name: /Stack/i })).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../src/App';

describe('Language Toggle Integration', () => {
  it('renders the page with default English content', () => {
    render(<App />);
    expect(screen.getByText(/Senior Software Architect/i)).toBeInTheDocument();
  });

  it('switches all visible text to Portuguese when locale is toggled', () => {
    render(<App />);

    // Find the desktop language toggle button
    const toggleBtn = screen.getByLabelText('Toggle language');
    fireEvent.click(toggleBtn);

    // Verify Portuguese content appears
    expect(screen.getByText(/Arquiteto de Software Sênior/i)).toBeInTheDocument();
    expect(screen.getByText(/Habilidades/i)).toBeInTheDocument();
    expect(screen.getByText(/Experiência/i)).toBeInTheDocument();
  });

  it('toggles back to English on second click', () => {
    render(<App />);

    const toggleBtn = screen.getByLabelText('Toggle language');
    fireEvent.click(toggleBtn); // → PT
    fireEvent.click(toggleBtn); // → EN

    expect(screen.getByText(/Senior Software Architect/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
  });
});

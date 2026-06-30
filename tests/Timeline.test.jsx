import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LocaleProvider } from '../src/context/LocaleContext';
import Timeline from '../src/components/Timeline';

describe('Timeline Component', () => {
  const renderWithLocale = () => {
    return render(
      <LocaleProvider>
        <Timeline />
      </LocaleProvider>
    );
  };

  it('renders only experience entries from the data file', () => {
    renderWithLocale();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /Junior Backend Engineer/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /^Software Engineer$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /Senior Software Architect/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/Denox/i)).toBeInTheDocument();
    expect(screen.getByText(/Vitau/i)).toBeInTheDocument();
    expect(screen.getByText(/SaveLivez/i)).toBeInTheDocument();
    expect(screen.getByText(/Optibus/i)).toBeInTheDocument();
    expect(screen.queryByText(/Bachelor's in Mechatronic Engineering/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Software Engineering Specialization/i)).not.toBeInTheDocument();
  });

  it('renders entries in chronological order (oldest first)', () => {
    renderWithLocale();
    const periods = screen.getAllByText(/\d{4}/);
    // The first period should be from the earliest entry (2014)
    const periodTexts = periods.map((el) => el.textContent);
    // Find period elements specifically inside timeline-period class
    const periodElements = document.querySelectorAll('.timeline-period');
    const years = Array.from(periodElements).map((el) => {
      const match = el.textContent.match(/(\d{4})/);
      return match ? parseInt(match[1], 10) : 0;
    });
    // Verify ascending order
    for (let i = 1; i < years.length; i++) {
      expect(years[i]).toBeGreaterThanOrEqual(years[i - 1]);
    }
  });

  it('renders concrete business metrics in bullet points', () => {
    renderWithLocale();
    expect(screen.getByText(/100,000 concurrent requests via Twilio\/SES/i)).toBeInTheDocument();
    expect(screen.getByText(/10x/i)).toBeInTheDocument();
  });
});

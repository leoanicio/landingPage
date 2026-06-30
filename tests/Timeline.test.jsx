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

  it('renders all timeline entries from the data file', () => {
    renderWithLocale();
    expect(screen.getByText(/Bachelor's in Mechatronic Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/Master's in Electrical Engineering & Junior Backend Engineer/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: /AWS Certified Solutions Architect - Associate & Senior Software Architect/i,
      })
    ).toBeInTheDocument();
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
    expect(screen.getByText(/thousands of vehicles per second/i)).toBeInTheDocument();
    expect(screen.getByText(/100,000\+ Twilio\/SES requests/i)).toBeInTheDocument();
    expect(screen.getByText(/10x/i)).toBeInTheDocument();
  });
});

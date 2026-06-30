import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LocaleProvider } from '../src/context/LocaleContext';
import EducationCertifications from '../src/components/EducationCertifications';

describe('EducationCertifications Component', () => {
  const renderWithLocale = () => {
    return render(
      <LocaleProvider>
        <EducationCertifications />
      </LocaleProvider>
    );
  };

  it('renders education and certification sections separately', () => {
    renderWithLocale();

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Education \+ Certifications/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Education/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /Certifications/i })).toBeInTheDocument();
    expect(screen.getByText(/Bachelor's in Mechatronic Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/Master's in Electrical Engineering/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 4,
        name: /^Software Engineering Specialization$/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 4,
        name: /AWS Certified Solutions Architect - Associate/i,
      })
    ).toBeInTheDocument();
  });
});

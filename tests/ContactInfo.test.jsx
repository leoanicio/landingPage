import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LocaleProvider } from '../src/context/LocaleContext';
import ContactInfo from '../src/components/ContactInfo';

describe('ContactInfo Component', () => {
  const renderWithLocale = () => {
    return render(
      <LocaleProvider>
        <ContactInfo />
      </LocaleProvider>
    );
  };

  it('renders a WhatsApp link with the correct href', () => {
    renderWithLocale();
    const whatsappLink = document.getElementById('whatsapp-link');
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/5531994920075');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
  });

  it('renders the email contact coordinate', () => {
    renderWithLocale();
    expect(screen.getByText('leonardoaapereira@gmail.com')).toBeInTheDocument();
  });

  it('renders social links for GitHub and LinkedIn', () => {
    renderWithLocale();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('does NOT render a contact form or submit button', () => {
    renderWithLocale();
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /submit/i })).not.toBeInTheDocument();
  });
});

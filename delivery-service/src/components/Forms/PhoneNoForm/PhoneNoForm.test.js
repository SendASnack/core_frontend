import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhoneNoForm from './PhoneNoForm';

describe('<PhoneNoForm />', () => {
  test('it should mount', () => {
    render(<PhoneNoForm />);
    
    const phoneNoForm = screen.getByTestId('PhoneNoForm');

    expect(phoneNoForm).toBeInTheDocument();
  });
});
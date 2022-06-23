import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddressForm from './AddressForm';

describe('<AddressForm />', () => {
  test('it should mount', () => {
    render(<AddressForm />);
    
    const addressForm = screen.getByTestId('AddressForm');

    expect(addressForm).toBeInTheDocument();
  });
});
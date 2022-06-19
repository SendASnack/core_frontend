import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RideForm from './RideForm';

describe('<RideForm />', () => {
  test('it should mount', () => {
    render(<RideForm />);
    
    const rideForm = screen.getByTestId('RideForm');

    expect(rideForm).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GpsPanel from './GpsPanel';

describe('<GpsPanel />', () => {
  test('it should mount', () => {
    render(<GpsPanel />);
    
    const gpsPanel = screen.getByTestId('GpsPanel');

    expect(gpsPanel).toBeInTheDocument();
  });
});
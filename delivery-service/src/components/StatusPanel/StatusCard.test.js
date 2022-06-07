import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatusPanel from './StatusCard';

describe('<StatusPanel />', () => {
  test('it should mount', () => {
    render(<StatusPanel />);
    
    const statusPanel = screen.getByTestId('StatusPanel');

    expect(statusPanel).toBeInTheDocument();
  });
});
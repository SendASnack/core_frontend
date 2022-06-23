import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatusCard from "./StatusCard";

describe('<StatusCard />', () => {
  test('it should mount', () => {
    render(<StatusCard />);
    
    const statusCard = screen.getByTestId('status-card');

    expect(statusCard).toBeInTheDocument();
  });
});
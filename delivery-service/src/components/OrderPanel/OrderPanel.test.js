import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderPanel from './OrderPanel';

describe('<OrderPanel />', () => {
  test('it should mount', () => {
    render(<OrderPanel />);
    
    const orderPanel = screen.getByTestId('OrderPanel');

    expect(orderPanel).toBeInTheDocument();
  });
});
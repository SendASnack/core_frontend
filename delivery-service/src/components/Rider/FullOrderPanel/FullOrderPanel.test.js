import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FullOrderPanel from './FullOrderPanel';

describe('<FullOrderPanel />', () => {
  test('it should mount', () => {
    render(<FullOrderPanel />);
    
    const fullOrderPanel = screen.getByTestId('order-panel');

    expect(fullOrderPanel).toBeInTheDocument();
  });
});
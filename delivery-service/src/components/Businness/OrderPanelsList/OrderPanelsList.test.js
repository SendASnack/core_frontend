import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderPanelsList from './OrderPanelsList';

describe('<OrderPanelsList />', () => {
  test('it should mount', () => {
    render(<OrderPanelsList />);
    
    const orderPanelsList = screen.getByTestId('OrderPanelsList');

    expect(orderPanelsList).toBeInTheDocument();
  });
});
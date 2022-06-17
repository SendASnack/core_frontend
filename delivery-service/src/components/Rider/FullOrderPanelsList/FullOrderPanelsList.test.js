import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FullOrderPanelsList from './FullOrderPanelsList';

describe('<FullOrderPanelsList />', () => {
  test('it should mount', () => {
    render(<FullOrderPanelsList />);
    
    const fullOrderPanelsList = screen.getByTestId('FullOrderPanelsList');

    expect(fullOrderPanelsList).toBeInTheDocument();
  });
});
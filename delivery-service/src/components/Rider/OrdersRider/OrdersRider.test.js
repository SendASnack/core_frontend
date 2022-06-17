import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrdersRider from './OrdersRider';

describe('<OrdersRider />', () => {
  test('it should mount', () => {

    if (localStorage.hasOwnProperty('token')) {
      render(<OrdersRider/>);

      const ordersRider = screen.getByTestId('OrdersRider');

      expect(ordersRider).toBeInTheDocument();
    }
  });
});
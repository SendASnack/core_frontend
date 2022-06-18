import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrdersBusiness from './OrdersBusiness';
import {BrowserRouter} from "react-router-dom";

describe('<OrdersBusiness />', () => {
  test('it should mount', () => {
    render(<BrowserRouter><OrdersBusiness /></BrowserRouter>);
    
    const orders = screen.getByTestId('orders-business');

    expect(orders).toBeInTheDocument();
  });
});
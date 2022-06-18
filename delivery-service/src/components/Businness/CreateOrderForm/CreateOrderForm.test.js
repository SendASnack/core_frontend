import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateOrderForm from './CreateOrderForm';

describe('<CreateOrderForm />', () => {
  test('it should mount', () => {
    render(<CreateOrderForm />);
    
    const createOrderForm = screen.getByTestId('create-order-form');

    expect(createOrderForm).toBeInTheDocument();
  });
});
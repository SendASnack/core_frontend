import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserCard from './UserCard';

describe('<UserCard />', () => {
  test('it should mount', () => {
    render(<UserCard />);
    
    const userCard = screen.getByTestId('UserCard');

    expect(userCard).toBeInTheDocument();
  });
});
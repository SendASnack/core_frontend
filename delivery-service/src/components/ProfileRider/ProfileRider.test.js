import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileRider from "./ProfileRider";

describe('<ProfileRider />', () => {
  test('it should mount', () => {
    render(<ProfileRider />);
    
    const profile = screen.getByTestId('ProfileRider');

    expect(profile).toBeInTheDocument();
  });
});
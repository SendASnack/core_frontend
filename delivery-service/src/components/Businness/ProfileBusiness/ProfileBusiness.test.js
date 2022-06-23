import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileBusiness from './ProfileBusiness';

describe('<ProfileBusiness />', () => {
  test('it should mount', () => {
    render(<ProfileBusiness />);
    
    const profileBusiness = screen.getByTestId('ProfileBusiness');

    expect(profileBusiness).toBeInTheDocument();
  });
});
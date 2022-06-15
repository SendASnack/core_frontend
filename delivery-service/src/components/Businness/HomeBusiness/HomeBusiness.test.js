import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeBusiness from './HomeBusiness';

describe('<HomeBusiness />', () => {
  test('it should mount', () => {
    render(<HomeBusiness />);
    
    const homeBusiness = screen.getByTestId('HomeBusiness');

    expect(homeBusiness).toBeInTheDocument();
  });
});
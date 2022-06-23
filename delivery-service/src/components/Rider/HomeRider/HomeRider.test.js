import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomeRider from './HomeRider';

describe('<HomeRider />', () => {
    test('it should mount', () => {

        if (localStorage.hasOwnProperty('token')) {
            render(<HomeRider/>);

            const home = screen.getByTestId('HomeRider');
            expect(home).toBeInTheDocument();
        }
    });
});
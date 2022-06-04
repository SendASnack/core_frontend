import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('<Home />', () => {
    test('it should mount', () => {

        if (localStorage.hasOwnProperty('token')) {
            render(<Home/>);

            const home = screen.getByTestId('Home');
            expect(home).toBeInTheDocument();
        }
    });
});
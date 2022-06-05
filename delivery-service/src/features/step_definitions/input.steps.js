import React from 'react';
import {defineFeature, loadFeature} from 'jest-cucumber';
import Input from "../../components/Input/Input";
import {render, fireEvent, act} from '@testing-library/react';

const feature = loadFeature('./src/features/input.feature');

defineFeature(feature, test => {

    let getElement;
    let input;
    let spy;

    beforeEach(() => {
        act(() => {
            spy = jest.fn();
            const {getByTestId} = render(<Input on_value_changed={spy}/>);
            getElement = getByTestId;
        });
    });

    test('Update value on change', ({given, when, then, and}) => {

        given('a rendered input', () => {
            input = getElement('input-field');
        });

        when(/^the input value changes to "(.*)"$/, (arg0) => {
            fireEvent.change(input, {target: {value: arg0}});
        });

        then(/^the input value should be updated to "(.*)"$/, (arg0) => {
            expect(input.value).toBe(arg0);
        });

        and(/^the on_value_changed callback should be called with "(.*)"$/, (arg0) => {
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(arg0);
        });
    });
});
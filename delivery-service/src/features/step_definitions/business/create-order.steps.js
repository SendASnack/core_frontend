import React from 'react';
import {defineFeature, loadFeature} from 'jest-cucumber';
import {render, fireEvent, act} from '@testing-library/react';
import CreateOrderForm from "../../../components/Businness/CreateOrderForm/CreateOrderForm";
import {toast} from "react-toastify";

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

const feature = loadFeature('./src/features/create-order.feature');

defineFeature(feature, test => {

    let getElement;
    let spy;

    let toastCalls;

    beforeEach(() => {
        act(() => {

            toastCalls = [];
            toast.mockImplementation((...args) => {
                toastCalls.push(args[0])
            });

            spy = jest.fn();
        });
    });

    test('Without filling all fields', ({given, when, then}) => {

        given('a rendered create-order-form', () => {
            const {getByTestId} = render(<CreateOrderForm />);
            getElement = getByTestId;
        });

        when('I click on the submit button', () => {
            fireEvent.click(getElement('create-order-button'));
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });
});
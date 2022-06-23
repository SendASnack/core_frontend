import React from 'react';
import {defineFeature, loadFeature} from 'jest-cucumber';
import {render, fireEvent, act} from '@testing-library/react';
import {toast} from "react-toastify";
import {BrowserRouter} from "react-router-dom";
import HomeBusiness from "../../../components/Businness/HomeBusiness/HomeBusiness";
import {orders} from "../../../utils/entities/orders";

const feature = loadFeature('./src/features/business-home-orders.feature');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

jest.mock('react-chartjs-2', () => ({
    Line: () => null
}));

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

    test('Without orders', ({given, then, and}) => {

        given('I am on the OrdersBusiness page without orders', () => {
            const {getByTestId} = render(<BrowserRouter><HomeBusiness /></BrowserRouter>);
            getElement = getByTestId;
        });

        then(/^the number of total orders should be equal to (\d+)$/, (arg0) => {
            let totalOrders = getElement('total-orders');
            expect(totalOrders.textContent).toBe(arg0 + " order(s)");
        });

        and(/^the number of ongoing orders should be equal to (\d+)$/, (arg0) => {
            let ongoingOrders = getElement('ongoing-orders');
            expect(ongoingOrders.textContent).toBe(arg0 + " order(s)");
        });
    });

    test('With orders', ({given, then, and}) => {

        given('I am on the OrdersBusiness page with orders', () => {
            const {getByTestId} = render(<BrowserRouter><HomeBusiness orders={orders}/></BrowserRouter>);
            getElement = getByTestId;
        });

        then(/^the number of total orders should be different than (\d+)$/, (arg0) => {
            let totalOrders = getElement('total-orders');
            expect(totalOrders.textContent).not.toBe(arg0 + " order(s)");
        });
    });

    test('Click ready on first order', ({given, when, then, and}) => {

        given('I am on the OrdersBusiness page with orders', () => {
            const {getByTestId} = render(<BrowserRouter><HomeBusiness orders={orders}/></BrowserRouter>);
            getElement = getByTestId;
        });

        when('I click on the ready button of the first order', () => {
            const readyButton = getElement('order-panel-0-ready-button');
            fireEvent.click(readyButton);
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });

});
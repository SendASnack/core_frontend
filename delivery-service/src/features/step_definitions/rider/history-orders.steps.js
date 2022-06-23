import React from 'react';
import {defineFeature, loadFeature} from "jest-cucumber";
import {act, fireEvent, render} from "@testing-library/react";
import {toast} from "react-toastify";
import {orders} from "../../../utils/entities/orders";
import OrdersRider from "../../../components/Rider/OrdersRider/OrdersRider";
import {BrowserRouter} from "react-router-dom";

const feature = loadFeature('./src/features/history-orders.feature');
const axios = require('axios');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

jest.mock('axios', () => {
    const actual = jest.requireActual('axios');
    Object.assign(actual, {get: jest.fn()});
    return actual;
});


defineFeature(feature, test => {

    let setStateMock;
    let useStateMock;
    let dateFilter;

    let getElement;
    let spy;
    let toastCalls;

    beforeEach(() => {
        act(() => {

            toastCalls = [];
            toast.mockImplementation((...args) => {
                toastCalls.push(args[0])
            });

            axios.get.mockResolvedValue({
                data: {orders}
            });

            setStateMock = jest.fn();
            useStateMock = (useState) => [useState, setStateMock];
            jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        });
    });

    test("Without orders", ({given, when, then, and}) => {

        given('I am on the OrdersRide page without orders', () => {
            const {getByTestId} = render(<BrowserRouter><OrdersRider/></BrowserRouter>);
            getElement = getByTestId;

            expect(getElement('orders-rider')).toBeTruthy();
        });

        then(/^I should see the text "(.*)"$/, (arg0) => {
            let statusText = getElement('FullOrderPanelsList');
            expect(statusText.textContent).toBe(arg0);
        });

        and(/^the number of total orders should be equal to (\d+)$/, (arg0) => {
            let totalOrders = getElement('total-orders');
            expect(totalOrders.textContent).toBe("Total Orders: " + arg0);
        });

        and(/^the number of ongoing orders should be equal to (\d+)$/, (arg0) => {
            let ongoingOrders = getElement('ongoing-orders');
            expect(ongoingOrders.textContent).toBe("Ongoing Orders: " + arg0);
        });
    });

    test("With orders", ({given, when, then}) => {

        given('I am on the OrdersRide page with orders', () => {
            const {getByTestId} = render(<BrowserRouter><OrdersRider orders={orders}/></BrowserRouter>);
            getElement = getByTestId;

            expect(getElement('orders-rider')).toBeTruthy();
        });

        then(/^the number of total orders should be different than (\d+)$/, (arg0) => {
            let totalOrders = getElement('total-orders');
            expect(totalOrders.textContent).not.toBe("Total Orders: " + arg0);
        });
    });

    test("Filter by date (without results)", ({given, when, then, and}) => {

        given('I am on the OrdersRide page with orders', () => {
            const {getByTestId} = render(<BrowserRouter><OrdersRider orders={orders}/></BrowserRouter>);
            getElement = getByTestId;

            expect(getElement('orders-rider')).toBeTruthy();
        });

        when('I click on the date filter', () => {
            dateFilter = getElement('date-filter');
            dateFilter.click();
        });

        and(/^I enter the date "(.*)"$/, (arg0) => {
            fireEvent.change(dateFilter, {target: {value: arg0}});
            const button = getElement('date-button');
            button.click();
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });

});
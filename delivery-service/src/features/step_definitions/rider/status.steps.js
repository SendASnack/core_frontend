import React from 'react';
import {defineFeature, loadFeature} from "jest-cucumber";
import {act, fireEvent, render} from "@testing-library/react";
import StatusCard from "../../../components/StatusCard/StatusCard";
import {toast} from "react-toastify";
import {orders} from "../../../utils/entities/orders";

const feature = loadFeature('./src/features/status.feature');
const axios = require('axios');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

jest.mock('axios', () => {
    const actual = jest.requireActual('axios');
    Object.assign(actual, {patch: jest.fn()});
    return actual;
});

defineFeature(feature, test => {

    let setStateMock;
    let useStateMock;

    let getElement;
    let spy;
    let toastCalls;

    beforeEach(() => {
        act(() => {

            toastCalls = [];
            spy = toast.mockImplementation((...args) => {
                toastCalls.push(args[0])
            });

            axios.patch.mockImplementation(() => {
                return Promise.resolve({
                    status: 200,
                });
            });

            setStateMock = jest.fn();
            useStateMock = (useState) => [useState, setStateMock];
            jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        });
    });

    test('Detect status', ({when, then}) => {

        when('I am on the HomeRider page for the first time', () => {
            const {getByTestId} = render(<StatusCard />);
            getElement = getByTestId;

            expect(getElement('status-card')).toBeTruthy();
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            expect(statusText.textContent).toBe(arg0);
        });
    });

    test('Detect status change (Offline)', ({given, when, then}) => {

        given('I am on the HomeRider page', () => {
            const {getByTestId} = render(<StatusCard />);
            getElement = getByTestId;

            expect(getElement('status-card')).toBeTruthy();
        });

        when('I click on the status switch', () => {
            let statusSwitch = getElement('status-switch');
            fireEvent.click(statusSwitch);
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {

            expect(setStateMock).toHaveBeenCalled();
            expect(setStateMock).toHaveBeenCalledWith("/No Delivery.png");
            expect(setStateMock).toHaveBeenCalledWith("Offline");

            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });

    test('Detect status change (Busy)', ({given, then}) => {

        given('I am on the HomeRider page with an order ongoing', () => {

            const {getByTestId} = render(<StatusCard ongoing={orders[0]} />);
            getElement = getByTestId;

            expect(getElement('status-card')).toBeTruthy();
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            expect(statusText.textContent).toBe(arg0);
        });
    });

    test('Block status change when Busy', ({given, when, then}) => {

        given('I am on the HomeRider page with an order ongoing', () => {

            const {getByTestId} = render(<StatusCard ongoing={orders[0]} />);
            getElement = getByTestId;

            expect(getElement('status-card')).toBeTruthy();
        });

        when('I click on the status switch', () => {
            const statusSwitch = getElement('status-switch');
            fireEvent.click(statusSwitch);
        });

        then('I shouldn\'t be notified', () => {

            expect(setStateMock).toHaveBeenCalled();
            expect(setStateMock).toHaveBeenCalledWith("/OnGoing Delivery.png");
            expect(setStateMock).toHaveBeenCalledWith("Busy");

            expect(toastCalls.length).toEqual(0);
        });
    });
});
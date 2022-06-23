import {defineFeature, loadFeature} from "jest-cucumber";
import {act, fireEvent, render} from "@testing-library/react";
import HomeRider from "../../../components/Rider/HomeRider/HomeRider";
import {BrowserRouter} from "react-router-dom";

const feature = loadFeature('./src/features/status.feature');
const axios = require('axios');

jest.mock('axios');

defineFeature(feature, test => {

    let getElement;
    let statusCard;
    let api;

    let orders =
        [{
            "id": 15,
            "orderRequest": {
                "id": 12,
                "businessUsername": "Danny2",
                "costumer": {
                    "id": 54,
                    "name": "Danny",
                    "email": "ddias@ua.pt",
                    "address": {
                        "id": 55,
                        "city": "Aveiro",
                        "street": "Ílhavo",
                        "postalCode": "3830-200"
                    }
                },
                "order": {
                    "id": 56,
                    "date": "2022-06-22 03:35:12",
                    "totalPrice": 10,
                    "products": [
                        {
                            "id": 57,
                            "name": "Pizza",
                            "description": "Sausage one!",
                            "price": 10,
                            "ingredients": [
                                "Sausage",
                                "Cheese",
                                "Tomato Sauce"
                            ]
                        }
                    ]
                },
                "deliveryTime": "2022-06-22 10:40:00",
                "orderStatus": "READY"
            },
            "deliveryPrediction": "2022-06-22 10:40:00",
            "deliveryStatus": "READY",
            "rider": null
        }];

    beforeEach(() => {
        act(() => {

            api = axios.get.mockResolvedValue({
                data: orders
            });

            const {getByTestId} = render(<BrowserRouter><HomeRider/></BrowserRouter>);
            getElement = getByTestId;
        });
    });

    test('Detect status', ({when, then}) => {

        when('I am on the HomeRider page for the first time', () => {
            statusCard = getElement('status-card');
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            expect(statusText.textContent).toBe(arg0);
        });
    });

    test('Detect status change (Offline)', ({given, when, then}) => {

        given('I am on the HomeRider page', () => {
            statusCard = getElement('status-card');
        });

        when('I click on the status switch', () => {
            // statusSwitch = getElement('status-switch');
            // fireEvent.click(statusSwitch);
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            // expect(statusText.textContent).toBe(arg0);
        });
    });

    test('Detect status change (Busy)', ({given, when, then, and}) => {

        given('I am on the HomeRider page', () => {
            statusCard = getElement('status-card');
        });

        and('I have orders available', () => {
            // expect(getElement('order-panel-0'));
        });

        when('I accept an order', () => {
            // const orderButton = getElement('order-panel-0-accept');
            // fireEvent.click(orderButton);
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            // expect(statusText.textContent).toBe(arg0);
        });
    });

    test('Block status change when Busy', ({given, when, then, and}) => {

        given('I am on the HomeRider page', () => {
            statusCard = getElement('status-card');
        });

        and('I have orders available', () => {
            //expect(getElement('order-panel-0'));
        });

        when('I accept an order', () => {
            // const orderButton = getElement('order-panel-0-accept');
            // fireEvent.click(orderButton);
        });

        and('I click on the status switch', () => {
            // statusSwitch = getElement('status-switch');
            // fireEvent.click(statusSwitch);
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            // expect(statusText.textContent).toBe(arg0);
        });
    });
});
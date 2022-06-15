import {defineFeature, loadFeature} from "jest-cucumber";
import {act, fireEvent, render} from "@testing-library/react";
import {toast} from "react-toastify";
import HomeRider from "../../components/Rider/HomeRider/HomeRider";
import OrderPanelsList from "../../components/Rider/OrderPanelsList/OrderPanelsList";
import {BrowserRouter} from "react-router-dom";

const feature = loadFeature('./src/features/status.feature');

defineFeature(feature, test => {

    let getElement;
    let statusCard;
    let statusSwitch;

    const orders = [{
        "id": 1,
        "costumer": {
            "name": "Daniela Dias",
            "email": "ddias@ua.pt",
            "address": {
                "city": "Aveiro",
                "street": "Rua do Sol",
                "postalCode": "5680-654"
            }
        },
        "order": {
            "date": "2022-05-30 00:00:00",
            "totalPrice": 25.00,
            "products": [
                {
                    "name": "Product 1",
                    "description": "This is the new product",
                    "ingredients": [
                        "Lettice",
                        "Tomato"
                    ],
                    "price": 25.00
                }
            ]
        },
        "deliveryTime": "2022-05-31 01:00:00"
    }];

    beforeEach(() => {
        act(() => {
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
            statusSwitch = getElement('status-switch');
            fireEvent.click(statusSwitch);
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            expect(statusText.textContent).toBe(arg0);
        });
    });

    test('Detect status change (Busy)', ({given, when, then, and}) => {

        given('I am on the HomeRider page', () => {
            statusCard = getElement('status-card');
        });

        and('I have orders available', () => {
            expect(getElement('order-panel-0'));
        });

        when('I accept an order', () => {
            const orderButton = getElement('order-panel-0-accept');
            fireEvent.click(orderButton);
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            expect(statusText.textContent).toBe(arg0);
        });
    });

    test('Block status change when Busy', ({given, when, then, and}) => {

        given('I am on the HomeRider page', () => {
            statusCard = getElement('status-card');
        });

        and('I have orders available', () => {
            expect(getElement('order-panel-0'));
        });

        when('I accept an order', () => {
            const orderButton = getElement('order-panel-0-accept');
            fireEvent.click(orderButton);
        });

        and('I click on the status switch', () => {
            statusSwitch = getElement('status-switch');
            fireEvent.click(statusSwitch);
        });

        then(/^I should see the status "(.*)"$/, (arg0) => {
            let statusText = getElement('status-text');
            expect(statusText.textContent).toBe(arg0);
        });
    });
});
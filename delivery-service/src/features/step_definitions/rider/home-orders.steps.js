import {defineFeature, loadFeature} from "jest-cucumber";
import {act, fireEvent, render} from "@testing-library/react";
import OrderPanel from "../../../components/Rider/OrderPanel/OrderPanel";
import {toast} from "react-toastify";

const feature = loadFeature('./src/features/home-orders.feature');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

defineFeature(feature, test => {

    let getElement;
    let order =
        {
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
        };

    let toastCalls;
    let spy;

    beforeEach(() => {
        act(() => {
            toastCalls = [];
            toast.mockImplementation((...args) => {
                toastCalls.push(args[0])
            });

            spy = jest.fn();

            const {getByTestId} = render(<OrderPanel orderId={order.id} order={order.orderRequest.order} costumer={order.orderRequest.costumer}
                                                     deliveryTime={order.orderRequest.deliveryTime} onAccept={spy} onDecline={spy}/>);
            getElement = getByTestId;
        });
    });

    test('Accept order', ({given, when, then, and}) => {

        given('a rendered order panel', () => {
            expect(getElement).toBeDefined();
        });

        when('I click on the accept button', () => {
            const button = getElement('order-panel-accept');
            fireEvent.click(button);
        });

        then('the order should be accepted', () => {
            expect(spy).toHaveBeenCalled();
        });

        and(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });

    test('Decline order', ({given, when, then, and}) => {

        given('a rendered order panel', () => {
            expect(getElement).toBeDefined();
        });

        when('I click on the decline button', () => {
            const button = getElement('order-panel-decline');
            fireEvent.click(button);
        });

        then('the order should be declined', () => {
            expect(spy).toHaveBeenCalled();
        });

        and(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });


});
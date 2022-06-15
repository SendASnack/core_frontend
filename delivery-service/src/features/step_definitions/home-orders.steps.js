import {defineFeature, loadFeature} from "jest-cucumber";
import {act, fireEvent, render} from "@testing-library/react";
import OrderPanel from "../../components/Rider/OrderPanel/OrderPanel";
import {toast} from "react-toastify";

const feature = loadFeature('./src/features/home-orders.feature');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

defineFeature(feature, test => {

    let getElement;
    let order = {
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

            const {getByTestId} = render(<OrderPanel order={order} onAccept={spy} onDecline={spy}/>);
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
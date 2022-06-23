import {defineFeature, loadFeature} from "jest-cucumber";
import {act, fireEvent, render} from "@testing-library/react";
import OrderPanel from "../../../components/Rider/OrderPanel/OrderPanel";
import {toast} from "react-toastify";
import {orders} from "../../../utils/entities/orders";

const feature = loadFeature('./src/features/home-orders.feature');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

defineFeature(feature, test => {

    let getElement;
    let toastCalls;
    let spy;

    beforeEach(() => {
        act(() => {
            toastCalls = [];
            toast.mockImplementation((...args) => {
                toastCalls.push(args[0])
            });

            spy = jest.fn();

            const order = orders[0];
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
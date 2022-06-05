import React from 'react';
import {defineFeature, loadFeature} from 'jest-cucumber';
import Signup from '../../components/SignUp/SignUp';
import {render, fireEvent, act} from '@testing-library/react';
import {toast} from 'react-toastify';
const axios = require('axios');

const feature = loadFeature('./src/features/signup.feature');

jest.mock('react-toastify', () => {
    const actual = jest.requireActual('react-toastify');
    Object.assign(actual, {toast: jest.fn()});
    return actual;
});

jest.mock('axios', () => {
    const actual = jest.requireActual('axios');
    Object.assign(actual, {post: jest.fn()});
    return actual;
});

defineFeature(feature, test => {

    let getElement;
    let button;

    let api;
    let spy;
    let toastCalls;

    beforeEach(() => {
        act(() => {
            toastCalls = [];
            spy = toast.mockImplementation((...args) => {
                toastCalls.push(args[0])
            });

            api = axios.post.mockImplementation(() => {
                return Promise.resolve({
                    data: { message: 'The user was successfully registered!' }
                });
            });

            const {getByTestId} = render(<Signup/>);
            getElement = getByTestId;

        });
    });

    test('Detect the submit action', ({given, when, then}) => {

        given('I am in the Sign Up page', () => {
            button = getElement("submit-button");
        });

        when('I click the submit button', () => {
            fireEvent.click(button);
        });

        then('I should be notified', () => {
            expect(toastCalls.length).toEqual(1);
        });
    });

    test('Submit with invalid username', ({given, and, when, then}) => {

        given('I am in the Sign Up page', () => {
            button = getElement("submit-button");
        });

        when(/^I enter the username "(.*)"$/, (arg0) => {
            const username = getElement('input-field-Username');
            fireEvent.change(username, {target: {value: arg0}});
        });

        and('I click the submit button', () => {
            fireEvent.click(button);
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });


    test('Submit with invalid email', ({given, and, when, then}) => {

        given('I am in the Sign Up page', () => {
            button = getElement("submit-button");
        });

        when(/^I enter the username "(.*)"$/, (arg0) => {
            const username = getElement('input-field-Username');
            fireEvent.change(username, {target: {value: arg0}});
        });

        and(/^I enter the email "(.*)"$/, (arg0) => {
            const email = getElement('input-field-Email');
            fireEvent.change(email, {target: {value: arg0}});
        });

        and('I click the submit button', () => {
            fireEvent.click(button);
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });

    test('Submit with invalid password (strength)', ({given, and, when, then}) => {

        given('I am in the Sign Up page', () => {
            button = getElement("submit-button");
        });

        when(/^I enter the username "(.*)"$/, (arg0) => {
            const username = getElement('input-field-Username');
            fireEvent.change(username, {target: {value: arg0}});
        });

        and(/^I enter the email "(.*)"$/, (arg0) => {
            const email = getElement('input-field-Email');
            fireEvent.change(email, {target: {value: arg0}});
        });

        and(/^I enter the password "(.*)"$/, (arg0) => {
            const password = getElement('input-field-Password');
            fireEvent.change(password, {target: {value: arg0}});
        });

        and('I click the submit button', () => {
            fireEvent.click(button);
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });


    test('Submit with invalid password (confirm password doesn\'t match)', ({given, and, when, then}) => {

        given('I am in the Sign Up page', () => {
            button = getElement("submit-button");
        });

        when(/^I enter the username "(.*)"$/, (arg0) => {
            const username = getElement('input-field-Username');
            fireEvent.change(username, {target: {value: arg0}});
        });

        and(/^I enter the email "(.*)"$/, (arg0) => {
            const email = getElement('input-field-Email');
            fireEvent.change(email, {target: {value: arg0}});
        });

        and(/^I enter the password "(.*)"$/, (arg0) => {
            const password = getElement('input-field-Password');
            fireEvent.change(password, {target: {value: arg0}});
        });

        and(/^I confirm the password with "(.*)"$/, (arg0) => {
            const password = getElement('input-field-Re-enter Password');
            fireEvent.change(password, {target: {value: arg0}});
        });

        and('I click the submit button', () => {
            fireEvent.click(button);
        });

        then(/^I should be notified with the message "(.*)"$/, (arg0) => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual(arg0);
        });
    });

    test('Submit successfully', ({given, and, when, then}) => {

        given('I am in the Sign Up page', () => {
            button = getElement("submit-button");
        });

        when(/^I enter the name "(.*)"$/, (arg0) => {
            const name = getElement('input-field-Name');
            fireEvent.change(name, {target: {value: arg0}});
        });

        and(/^I enter the username "(.*)"$/, (arg0) => {
            const username = getElement('input-field-Username');
            fireEvent.change(username, {target: {value: arg0}});
        });

        and(/^I enter the email "(.*)"$/, (arg0) => {
            const email = getElement('input-field-Email');
            fireEvent.change(email, {target: {value: arg0}});
        });

        and(/^I enter the phone number (\d+)$/, (arg0) => {
            const phone = getElement('input-field-Phone No.');
            fireEvent.change(phone, {target: {value: arg0}});
        });

        and(/^I enter the password "(.*)"$/, (arg0) => {
            const password = getElement('input-field-Password');
            fireEvent.change(password, {target: {value: arg0}});
        });

        and(/^I confirm the password with "(.*)"$/, (arg0) => {
            const password = getElement('input-field-Re-enter Password');
            fireEvent.change(password, {target: {value: arg0}});
        });

        and('I click the submit button', () => {
            fireEvent.click(button);
        });

        then('I should be in the Login page', () => {
            expect(toastCalls.length).toEqual(1);
            expect(toastCalls[0]).toEqual('The user was successfully registered!');
        });
    });


});
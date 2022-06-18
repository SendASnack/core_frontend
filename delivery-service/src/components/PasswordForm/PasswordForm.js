import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Form, Row} from "react-bootstrap";
import {toast} from "react-toastify";

const PasswordForm = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const notify = (message) => toast(message);

    const savePassword = () => {
        if (oldPassword === '' || newPassword === '') {
            notify('Please fill in all fields!');
        } else {
            notify('Password changed!');
        }
    }

    return (
        <Card className="shadow p-4 mb-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid="PasswordForm">
            <Row className="justify-content-center align-items-center d-flex">
                <Form.Group className="mb-3 w-75">
                    <Form.Label className="details mb-4 mt-2">Change Password</Form.Label>
                    <Form.Control className="mb-3" type="password" placeholder="Old Password"
                                  onChange={event => setOldPassword(event.target.value)}/>
                    <Form.Control className="my-3" type="password" placeholder="New Password"
                                  onChange={event => setNewPassword(event.target.value)}/>
                </Form.Group>
                <Button className="blue-button px-4 w-50" onClick={savePassword}>Save changes</Button>
            </Row>
        </Card>
    );
}

export default PasswordForm;

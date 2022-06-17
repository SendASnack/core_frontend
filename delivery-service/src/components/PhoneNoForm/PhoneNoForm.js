import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Form, Row} from "react-bootstrap";


const PhoneNoForm = () => {

    const [phoneNo, setPhoneNo] = useState('');

    const savePhoneNo = () => {
        console.log(phoneNo);
    }

    return (
        <Card className="shadow p-4 my-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid="PhoneNoNumber">
            <Row className="justify-content-center align-items-center d-flex">
                <Form.Group className="mb-3 w-75">
                    <Form.Label className="details mb-4 mt-2">Change Phone No.</Form.Label>
                    <Form.Control className="mb-3" type="text" placeholder="New Phone No."
                                  onChange={event => setPhoneNo(event.target.value)}/>
                </Form.Group>
                <Button className="blue-button px-4 w-50" onClick={savePhoneNo}>Save changes</Button>
            </Row>
        </Card>
    );
}

export default PhoneNoForm;
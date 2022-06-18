import React, {useState} from 'react';
import {Button, Card, Form, Row} from "react-bootstrap";

const AddressForm = () => {

    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const saveAddress = () => {
        console.log(city, street, postalCode);
    }

    return (
        <Card className="shadow p-4 my-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid="PhoneNoNumber">
            <Row className="justify-content-center align-items-center d-flex">
                <Form.Group className="mb-3 w-75">
                    <Form.Label className="details mb-4 mt-2">Change Address</Form.Label>
                    <Form.Control className="mb-3" type="text" placeholder="City"
                                  onChange={event => setCity(event.target.value)}/>
                    <Form.Control className="mb-3" type="text" placeholder="Street"
                                  onChange={event => setStreet(event.target.value)}/>
                    <Form.Control className="mb-3" type="text" placeholder="Postal Code"
                                  onChange={event => setPostalCode(event.target.value)}/>
                </Form.Group>
                <Button className="blue-button px-4 w-50" onClick={saveAddress}>Save changes</Button>
            </Row>
        </Card>
    );
}

export default AddressForm;

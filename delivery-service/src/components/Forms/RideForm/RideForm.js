import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Form, Row} from "react-bootstrap";

const RideForm = () => {

    const [ride, setRide] = useState('');

    /*

    const saveRide = () => {
        console.log(ride);
    }

    return (
        <Card className="shadow p-4 my-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid="RideForm">
            <Row className="justify-content-center align-items-center d-flex">
                <Form.Group className="mb-3 w-75">
                    <Form.Label className="details mb-4 mt-2">Change Ride</Form.Label>
                    <Form.Select className="mb-3" onChange={event => setRide(event.target.value)}>
                        <option>New Ride</option>
                        <option value={"Bicycle"}>Bicycle</option>
                        <option value={"Car"}>Car</option>
                        <option value={"Motorcycle"}>Motorcycle</option>
                    </Form.Select>
                </Form.Group>
                <Button className="blue-button px-4 w-50" onClick={saveRide}>Save changes</Button>
            </Row>
        </Card>
    );

     */

    return (
        <Card className="shadow p-4 my-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid="RideForm">
            <Row className="justify-content-center align-items-center d-flex">
                <Form.Group className="mb-3 w-75">
                    <Form.Label className="details mb-4 mt-2">Change Ride</Form.Label>
                    <Form.Select className="mb-3" onChange={event => setRide(event.target.value)}>
                        <option>New Ride</option>
                        <option value={"Bicycle"}>Bicycle</option>
                        <option value={"Car"}>Car</option>
                        <option value={"Motorcycle"}>Motorcycle</option>
                    </Form.Select>
                </Form.Group>
                <Button className="blue-button px-4 w-50 disabled">Save changes</Button>
            </Row>
        </Card>
    );
}

export default RideForm;

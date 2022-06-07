import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import './StatusCard.css';

const StatusCard = () =>  {

    const user = {"Status": "Free", "Ride": "Bicycle"};

    return (
        <Card className="shadow bg-white p-4 h-100" style={{borderRadius: "20px"}} data-testid="StatusPanel">
            <Row className="align-items-center d-flex h-100">
                <Col className="align-items-center d-flex mx-2 col-7">
                    <h2 className="user-title text-start">No Deliveries</h2>
                </Col>
                <Col className="text-start mx-2">
                    <h2 className="user-title">Status</h2>
                    <h2 className="user-details">{user.Status}</h2>
                    <h2 className="user-title">Ride</h2>
                    <h2 className="user-details">{user.Ride}</h2>
                </Col>
            </Row>
        </Card>
    )
};

export default StatusCard;

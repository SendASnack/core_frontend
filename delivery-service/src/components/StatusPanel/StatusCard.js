import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import './StatusCard.css';

const StatusCard = (props) =>  {

    if (props.ongoing) {
        return (
            <Card className="shadow bg-white p-4 h-100" style={{borderRadius: "20px"}} data-testid="StatusPanel">
                <Row className="align-items-center d-flex h-100">
                    <Col className="align-items-center justify-content-center d-flex mx-2 col-7">
                        <Image src="/OnGoing Delivery.png" style={{width: "9vw"}}/>
                    </Col>
                    <Col className="text-start mx-2">
                        <h2 className="status-title">Status</h2>
                        <h2 className="status-details">Busy</h2>
                        <h2 className="status-title">Ride</h2>
                        <h2 className="status-details">Bicycle</h2>
                    </Col>
                </Row>
            </Card>
        );
    }

    return (
        <Card className="shadow bg-white p-4 h-100" style={{borderRadius: "20px"}} data-testid="StatusPanel">
            <Row className="align-items-center d-flex h-100">
                <Col className="align-items-center justify-content-center d-flex mx-2 col-7">
                    <Image src="/No Delivery.png" style={{width: "9vw"}}/>
                </Col>
                <Col className="text-start mx-2">
                    <h2 className="status-title">Status</h2>
                    <h2 className="status-details">Free</h2>
                    <h2 className="status-title">Ride</h2>
                    <h2 className="status-details">Bicycle</h2>
                </Col>
            </Row>
        </Card>
    )
};

export default StatusCard;

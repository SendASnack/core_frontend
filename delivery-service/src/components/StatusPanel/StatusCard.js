import React from 'react';
import {Card, Col, Form, Image, Row} from "react-bootstrap";
import './StatusCard.css';

const StatusCard = (props) =>  {

    let status; let image;
    if (props.ongoing) {
        image = "/OnGoing Delivery.png";
        status = "Busy";
    } else if (props.offline) {
        image = "/No Delivery.png";
        status = "Offline";
    }
    else {
        image = "/No Delivery.png";
        status = "Free";
    }


    return (
        <Card className="shadow bg-white p-4 h-100" style={{borderRadius: "20px"}} data-testid="status-card">
            <Row className="align-items-center d-flex h-100">
                <Col className="align-items-center justify-content-center d-flex mx-2 col-7">
                    <Image src={image} style={{width: "9vw"}}/>
                </Col>
                <Col className="mx-2 my-4">
                    <Row className="text-start">
                        <h2 className="status-title">Status</h2>
                        <h2 data-testid="status-text" className="status-details">{status}</h2>
                    </Row>

                    <Row className="text-start">
                        <Form>
                            <Form.Check
                                data-testid="status-switch"
                                type="switch"
                                id="offline-switch"
                                onChange={() => props.on_status_changed()}
                            />
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
};

export default StatusCard;

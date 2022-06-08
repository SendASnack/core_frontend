import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import './OrderPanel.css';

const OrderPanel = (props) => {

    const [orderId] = useState(props.order.id);

    // Address details
    const [city] = useState(props.order.costumer.address.city);
    const [street] = useState(props.order.costumer.address.street);
    const [postalCode] = useState(props.order.costumer.address.postalCode);

    // Delivery time
    const [delivery] = useState(props.order.deliveryTime);

    const [disabled, setDisabled] = useState(props.disabled);

    const handleAccept = () => {
        if (props.onAccept) {
            props.onAccept(orderId);
        }
    }

    const handleDecline = () => {
        if (props.onDecline) {
            props.onDecline(orderId);
        }
    }

    useEffect(() => {
        setDisabled(props.disabled);
    }, [props.disabled]);

    if (disabled) {
        return (
            <Card className="shadow p-4 bg-white" style={{borderRadius: "20px", opacity: "50%"}} data-testid="OrderPanel">
                <Row className="align-items-center d-flex">
                    <Col className="col-3">
                        <Image className="order-image m-3 shadow" src="/Person A.jpg"  />
                    </Col>
                    <Col className="text-start m-2">
                        <Row>
                            <Col className="col-4">
                                <h2 className="order-title">Address</h2>
                                <h2 className="order-details">{city}</h2>
                                <h2 className="order-details">{street}</h2>
                                <h2 className="order-details">{postalCode}</h2>
                            </Col>
                            <Col className="col-5">
                                <h2 className="order-title">Estimated Delivery Time</h2>
                                <h2 className="order-details mt-3">{delivery}</h2>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-3">
                        <Row className="mb-4 w-75">
                            <Button className="accept-button disabled">Accept</Button>
                        </Row>
                        <Row className="mt-4 w-75">
                            <Button className="decline-button disabled">Decline</Button>
                        </Row>

                    </Col>
                </Row>
            </Card>
        );
    }


    return (
        <Card className="shadow p-4 bg-white" style={{borderRadius: "20px"}} data-testid="OrderPanel">
            <Row className="align-items-center d-flex">
                <Col className="col-3">
                    <Image className="order-image m-3 shadow" src="/Person A.jpg"  />
                </Col>
                <Col className="text-start m-2">
                    <Row>
                        <Col className="col-4">
                            <h2 className="order-title">Address</h2>
                            <h2 className="order-details">{city}</h2>
                            <h2 className="order-details">{street}</h2>
                            <h2 className="order-details">{postalCode}</h2>
                        </Col>
                        <Col className="col-5">
                            <h2 className="order-title">Estimated Delivery Time</h2>
                            <h2 className="order-details mt-3">{delivery}</h2>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-3">
                    <Row className="mb-4 w-75">
                        <Button className="accept-button" onClick={handleAccept.bind(this)}>Accept</Button>
                    </Row>
                    <Row className="mt-4 w-75">
                        <Button className="decline-button" onClick={handleDecline.bind(this)}>Decline</Button>
                    </Row>

                </Col>
            </Row>
        </Card>
    );
}

export default OrderPanel;

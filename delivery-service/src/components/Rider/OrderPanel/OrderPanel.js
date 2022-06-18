import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import {toast} from "react-toastify";

const OrderPanel = (props) => {

    const [orderId, setOrderId] = useState(undefined);

    // Address details
    const [city, setCity] = useState(undefined);
    const [street, setStreet] = useState(undefined);
    const [postalCode, setPostalCode] = useState(undefined);

    // Delivery time
    const [delivery, setDelivery] = useState(undefined);

    const [disabled, setDisabled] = useState(undefined);

    const notify = (message) => toast(message);

    useEffect(() => {
        if (props.order) {
            setOrderId(props.order.id);
            setCity(props.order.costumer.address.city);
            setStreet(props.order.costumer.address.street);
            setPostalCode(props.order.costumer.address.postalCode);
            setDelivery(props.order.deliveryTime);
            setDisabled(props.disabled);
        }
    }, [props]);

    const handleAccept = () => {
        if (props.onAccept) {
            props.onAccept(orderId);
            notify("Order accepted!");
        }
    }

    const handleDecline = () => {
        if (props.onDecline) {
            props.onDecline(orderId);
            notify("Order declined!");
        }
    }

    useEffect(() => {
        setDisabled(props.disabled);
    }, [props.disabled]);

    let id = "order-panel";
    if (props.number)
        id = id + "-" + props.number;

    if (disabled) {
        return (
            <Card className="shadow p-4 bg-white" style={{borderRadius: "20px", opacity: "50%"}} data-testid={id}>
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
                            <Button data-testid={id + "-" + "accept"} className="accept-button disabled">Accept</Button>
                        </Row>
                        <Row className="mt-4 w-75">
                            <Button data-testid={id + "-" + "decline"} className="decline-button disabled">Decline</Button>
                        </Row>

                    </Col>
                </Row>
            </Card>
        );
    }

    return (
        <Card className="shadow p-4 bg-white" style={{borderRadius: "20px"}} data-testid={id}>
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
                        <Button data-testid={id + "-" + "accept"} className="accept-button" onClick={handleAccept.bind(this)}>Accept</Button>
                    </Row>
                    <Row className="mt-4 w-75">
                        <Button data-testid={id + "-" + "decline"} className="decline-button" onClick={handleDecline.bind(this)}>Decline</Button>
                    </Row>

                </Col>
            </Row>
        </Card>
    );
}

export default OrderPanel;

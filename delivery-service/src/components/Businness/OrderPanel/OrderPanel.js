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

    const notify = (message) => toast(message);

    useEffect(() => {
        if (props.order) {
            setOrderId(props.order.id);
            setCity(props.order.costumer.address.city);
            setStreet(props.order.costumer.address.street);
            setPostalCode(props.order.costumer.address.postalCode);
            setDelivery(props.order.deliveryTime);
        }
    }, [props]);

    const handleDecline = () => {
        if (props.onDecline) {
            props.onDecline(orderId);
            notify("Order declined!");
        }
    }

    let id = "order-panel";
    if (props.number)
        id = id + "-" + props.number;

    let ongoing = false;
    if (delivery) {
        const now = new Date();
        const deliveryTime = new Date(delivery);
        ongoing = now < deliveryTime;
    }

    if (!ongoing) {
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
                            <Col className="col-6">
                                <h2 className="order-title">Estimated Delivery Time</h2>
                                <h2 className="order-details mt-3">{delivery}</h2>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-3">

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
                        <Col className="col-6">
                            <h2 className="order-title">Estimated Delivery Time</h2>
                            <h2 className="order-details mt-3">{delivery}</h2>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-3">
                    <Row className="mt-4 w-75">
                        <Button data-testid={id + "-" + "decline"} className="white-button" onClick={handleDecline.bind(this)}>Cancel</Button>
                    </Row>

                </Col>
            </Row>
        </Card>
    );
}

export default OrderPanel;

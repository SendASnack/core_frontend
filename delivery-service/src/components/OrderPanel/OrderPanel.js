import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";

const OrderPanel = (props) => {

    const [city, setAddress] = React.useState(props.city);
    const [street, setStreet] = React.useState(props.street);
    const [postalCode, setPostalCode] = React.useState(props.postalCode);

    const [delivery, setDelivery] = React.useState(props.deliveryTime);

    return (
        <Card className="shadow p-4 bg-white" style={{borderRadius: "20px"}} data-testid="OrderPanel">
            <Row className="align-items-center d-flex">
                <Col>
                    <Image className="user-image m-3 shadow" src="/Person B.jpg"  />
                </Col>
                <Col className="text-start m-2">
                    <Row>
                        <Col>
                            <h2 className="user-title">Address</h2>
                            <h2 className="user-details">{city}</h2>
                        </Col>
                        <Col>
                            <h2 className="user-title">Estimated Delivery Time</h2>
                            <h2 className="user-details">{delivery}</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default OrderPanel;

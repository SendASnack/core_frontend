import React, {useEffect, useState} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import './GpsPanel.css';
import {BsClockHistory, BsFillCircleFill} from "react-icons/bs";

const GpsPanel = (props) =>  {

    const [order, setOrder] = useState(undefined);
    const [costumer, setCostumer] = useState(undefined);

    useEffect(() => {
        if (props.ongoing) {
            setOrder(props.ongoing);
            setCostumer(props.ongoing.costumer);
        }
    }, [props.ongoing]);

    if (!order) {
        return (
            <Card className="shadow p-3 bg-white p-5" style={{borderRadius: "20px", minHeight: "30vw"}} data-testid="GpsPanel">
                <Row className="align-items-center d-flex">
                    <Col className="col-5">
                        <Image className="gps-image" src="/Gps Background.png" />
                    </Col>
                    <Col className="text-center m-1">
                        <p style={{fontWeight: "bold", fontSize: "1vw"}}>Looking for nearby orders...</p>
                        <p style={{fontSize: "0.8vw"}}>Check bellow!</p>
                    </Col>
                </Row>
            </Card>
        )
    }

    return (
        <Card className="shadow p-3 bg-white p-5" style={{borderRadius: "20px", minHeight: "30vw"}} data-testid="GpsPanel">
            <Row className="align-items-center d-flex">
                <Col className="col-5">
                    <Image className="gps-image" src="/Gps Background 2.png" />
                </Col>
                <Col className="col-5">
                    <Row>
                        <Col>
                            <Image className="delivery-image m-3 shadow" src="/Person A.jpg"  />
                        </Col>
                        <Col className="text-start mx-1">
                            <Row>
                                <h2 className="delivery-name">{costumer.name}</h2>
                                <h2 className="delivery-details">{costumer.email}</h2>
                                <h2 className="delivery-details">{costumer.address.city}, {costumer.address.street}, {costumer.address.postalCode}</h2>
                            </Row>
                            <Row className="justify-content-start text-start d-flex mt-4">
                                <Col className="col-3">
                                    <BsClockHistory size={30} />
                                </Col>
                                <Col>
                                    <h2 className="delivery-details">Delivery Time</h2>
                                    <p>{order.deliveryTime}</p>
                                </Col>
                            </Row>
                            <Row className="my-2">
                                <BsFillCircleFill size={5} />
                            </Row>
                            <Row className="my-2">
                                <BsFillCircleFill size={8} />
                            </Row>
                            <Row className="my-2">
                                <BsFillCircleFill size={10} />
                            </Row>

                            <Row className="justify-content-start text-start d-flex mt-4">
                                <Col className="col-3">
                                    <BsClockHistory size={30} />
                                </Col>
                                <Col>
                                    <h2 className="delivery-details">Destination</h2>
                                    <p>{costumer.address.city}, {costumer.address.street}, {costumer.address.postalCode}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
};

export default GpsPanel;

import React, {useEffect, useState} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";

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
                    Loading...
                </Row>
            </Card>
        )
    }

    return (
        <Card className="shadow p-3 bg-white p-5" style={{borderRadius: "20px", minHeight: "30vw"}} data-testid="GpsPanel">
            <Row className="align-items-center d-flex">
                <Col>
                    Loading...
                </Col>
                <Col className="col-5">
                    <Row className="align-items-center d-flex">
                        <Col>
                            <Image className="user-image m-3 shadow" src="/Person A.jpg"  />
                        </Col>
                        <Col className="text-start m-1">
                            <h2 className="user-name">{costumer.name}</h2>
                            <h2 className="user-details">{costumer.email}</h2>
                            <h2 className="user-details">{costumer.address.city}</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
};

export default GpsPanel;

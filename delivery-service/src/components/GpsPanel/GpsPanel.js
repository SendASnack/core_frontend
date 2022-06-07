import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

const GpsPanel = () =>  {

    return (
        <Card className="shadow p-3 bg-white p-5" style={{borderRadius: "20px", minHeight: "30vw"}} data-testid="GpsPanel">
            <Row className="align-items-center d-flex">
                Loading...
            </Row>
        </Card>
    )
};

export default GpsPanel;

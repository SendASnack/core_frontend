import React from 'react';
import {Col, Form} from "react-bootstrap";
import './Switch.css';


const Switch = (props) =>  {

    let deliveryColor;
    let storeColor;
    if (props.selected === 'Delivery Person') {
        deliveryColor = "#2F80ED";
        storeColor = '#3a3a3a';
    } else {
        deliveryColor = '#3a3a3a';
        storeColor = "#2F80ED";
    }

    return(
        <div data-testid="Switch">
            <Col  className="col-2 justify-content-center d-flex">
                <h5 style={{textTransform: "uppercase", color: deliveryColor}}>Delivery Person</h5>
            </Col>
            <Col className="col-4 align-items-center justify-content-center d-flex">
                <Form>
                    <Form.Check
                        type="switch"
                        id="singup-switch"
                        onChange={() => props.on_value_changed()}
                    />
                </Form>
            </Col>
            <Col  className="col-2 justify-content-center d-flex">
                <h5 style={{textTransform: "uppercase", color: storeColor}}>Verified Store</h5>
            </Col>
        </div>
    );

};

export default Switch;

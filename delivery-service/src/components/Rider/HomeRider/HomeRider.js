import React from 'react';
import Navbar from "../../Navbar/Navbar";
import {Col, Row} from "react-bootstrap";
import UserCard from "../UserCard/UserCard";
import StatusCard from "../../StatusPanel/StatusCard";
import GpsPanel from "../GpsPanel/GpsPanel";
import OrderPanelsList from "../OrderPanelsList/OrderPanelsList";

const HomeRider = () => {

    const allOrders = [
        {
            "id": 1,
            "costumer": {
                "name": "Daniela Dias",
                "email": "ddias@ua.pt",
                "address": {
                    "city": "Aveiro",
                    "street": "Rua do Sol",
                    "postalCode": "5680-654"
                }
            },
            "order": {
                "date": "2022-05-30 00:00:00",
                "totalPrice": 25.00,
                "products": [
                    {
                        "name": "Product 1",
                        "description": "This is the new product",
                        "ingredients": [
                            "Lettice",
                            "Tomato"
                        ],
                        "price": 25.00
                    }
                ]
            },
            "deliveryTime": "2022-05-31 01:00:00"
        },
        {
            "id": 2,
            "costumer": {
                "name": "Daniela Dias",
                "email": "ddias@ua.pt",
                "address": {
                    "city": "Aveiro",
                    "street": "Rua do Sol",
                    "postalCode": "5680-654"
                }
            },
            "order": {
                "date": "2022-05-30 00:00:00",
                "totalPrice": 25.00,
                "products": [
                    {
                        "name": "Product 1",
                        "description": "This is the new product",
                        "ingredients": [
                            "Lettice",
                            "Tomato"
                        ],
                        "price": 25.00
                    }
                ]
            },
            "deliveryTime": "2022-06-31 01:00:00"
        }
    ];

    const [order, setOrder] = React.useState(undefined);
    const [offline, setOffline] = React.useState(false);

    const handleStatusChange = () => {
        setOffline(!offline);
    }

    return (
        <Row className="justify-content-center text-center d-flex p-0" data-testid="HomeRider">
            <Navbar active="Home"/>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-4 p-0 mx-4">
                    <UserCard />
                </Col>
                <Col className="col-3 p-0 mx-4">
                    <StatusCard ongoing={order} offline={offline} on_status_changed={handleStatusChange}/>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-8 p-0">
                    <GpsPanel ongoing={order}  />
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-7 p-0">
                    <OrderPanelsList allOrders={allOrders} on_order_changed={setOrder.bind(this)} disabled={order !== undefined || offline} />
                </Col>
            </Row>
        </Row>
    );
}
export default HomeRider;

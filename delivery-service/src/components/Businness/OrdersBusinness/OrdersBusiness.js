import React, {useEffect} from 'react';
import Navbar from "../../Navbar/Navbar";
import {Card, Col, Container, Row} from "react-bootstrap";
import CreateOrderForm from "../CreateOrderForm/CreateOrderForm";
import OrderPanelsList from "../../Businness/OrderPanelsList/OrderPanelsList";
import {BsArrowUpCircleFill, BsFillCalendarEventFill} from "react-icons/bs";

const OrdersBusiness = () => {

    const [nOngoingOrders, setNOngoingOrders] = React.useState(0);
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
            "deliveryTime": "2022-06-31 01:00:00"
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
            "deliveryTime": "2022-05-31 01:00:00"
        },
        {
            "id": 3,
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
        }
    ];

    useEffect(() => {
        if (allOrders) {
            let ongoing = 0;
            for (let o of allOrders) {
                if (new Date(o.deliveryTime) > new Date()) {
                    ongoing++;
                }
            }
            setNOngoingOrders(ongoing);
        }
    }, [allOrders]);


    return (
        <Row className="justify-content-center text-center d-flex p-0" data-testid="orders-business">
            <Navbar active="OrdersBusiness"/>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-6 me-2">
                    <h2 className="text-start title">
                        <BsFillCalendarEventFill className="mx-2 pb-1"/> Orders History
                    </h2>
                    <Row>
                       <Col className="col-6">
                           <h2 className="text-start details mx-4 mt-4">Total Orders: {allOrders.length}</h2>
                       </Col>
                        <Col className="col-5">
                            <h2 className="text-end details mx-4 mt-4">Ongoing Orders: {nOngoingOrders}</h2>
                        </Col>
                    </Row>

                    <OrderPanelsList allOrders={allOrders}/>
                </Col>
                <Col className="col-4 ms-2">
                    <h2 className="text-start title">
                        <BsArrowUpCircleFill className="mx-2 pb-1"/> Create Order</h2>
                    <CreateOrderForm />
                </Col>
            </Row>
        </Row>
    );
}

export default OrdersBusiness;

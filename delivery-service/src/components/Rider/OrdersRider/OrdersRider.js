import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import {BsFillCalendarEventFill} from "react-icons/bs";
import FullOrderPanelsList from "../FullOrderPanelsList/FullOrderPanelsList";


const OrdersRider = () => {

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
                        "price": 15.00
                    },
                    {
                        "name": "Product 2",
                        "description": "This is another product",
                        "ingredients": [
                            "Lettice",
                            "Tomato"
                        ],
                        "price": 10.00
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

    const [filter, setFilter] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(allOrders);

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

    const handleSearch = () => {
        setFilteredOrders(allOrders.filter(o => new Date(o.order.date).toLocaleDateString() === new Date(filter).toLocaleDateString()));
    }

    return (
        <Row className="justify-content-center text-center d-flex p-0" data-testid="orders-rider">
            <Navbar active="OrdersBusiness"/>
            <Row className="mt-5 justify-content-center align-items-start d-flex">
                <Col className="col-6 me-2">
                    <Row>
                        <Col className="col-8">
                            <h2 className="text-start title">
                                <BsFillCalendarEventFill className="mx-2 pb-1"/> Orders History
                            </h2>
                        </Col>
                        <Col>
                            <Form className="d-flex">
                                <FormControl
                                    placeholder="YYYY-MM-DD"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={event => {setFilter(event.target.value)}}
                                    onKeyPress={event => {
                                        if (event.key === "Enter") {
                                            event.preventDefault();
                                            handleSearch();
                                        }
                                    }}
                                    onSubmit={handleSearch}
                                />
                                <Button className="white-button" onClick={handleSearch}>Search</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-6">
                            <h2 className="text-start details mx-4 mt-4">Total Orders: {allOrders.length}</h2>
                        </Col>
                        <Col className="col-5">
                            <h2 className="text-end details mx-4 mt-4">Ongoing Orders: {nOngoingOrders}</h2>
                        </Col>
                    </Row>

                    <FullOrderPanelsList allOrders={filteredOrders}/>
                </Col>
            </Row>
        </Row>
    );
}

export default OrdersRider;

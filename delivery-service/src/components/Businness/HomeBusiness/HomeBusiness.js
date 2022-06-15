import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import UserCard from "../../Rider/UserCard/UserCard";
import OrderPanelsList from "../../Businness/OrderPanelsList/OrderPanelsList";
import {Line} from 'react-chartjs-2';

import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

const HomeBusiness = () => {

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
        }
    ];

    const data = {
        // x-axis label values
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
            datasets: [
            {
                label: "# of orders",
                // y-axis data plotting values
                data: [200, 300, 1300, 520, 2000, 350,150],
                fill: false,
                borderWidth:4,
                backgroundColor: "#2F80ED",
                borderColor:'#2F80ED',
                responsive:true
            },
        ],
    }

    return (
        <Row className="justify-content-center text-center d-flex p-0" data-testid="HomeBusiness">
            <Navbar active="Home"/>
            {/*
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-4 p-0 mx-4">
                    <UserCard/>
                </Col>
                <Col className="col-3 p-0 mx-4">
                </Col>
            </Row>
            */}
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-7 p-0">
                    <Card className="shadow p-5 bg-white my-4" style={{borderRadius: "20px", border: "none"}}>
                        <h2 className="title mb-4">Dashboard</h2>
                        <Line data={data}/>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-7 p-0">
                    <OrderPanelsList allOrders={allOrders}/>
                </Col>
            </Row>
        </Row>
    );
}
HomeBusiness.propTypes = {};

HomeBusiness.defaultProps = {};

export default HomeBusiness;

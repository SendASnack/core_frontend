import React, {useEffect} from 'react';
import {Card, Col, Form, Image, Row} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import OrderPanelsList from "../../Businness/OrderPanelsList/OrderPanelsList";
import {Line} from 'react-chartjs-2';

import {Chart as ChartJS, registerables} from 'chart.js';
import UserCard from "../UserCard/UserCard";
import {toast} from "react-toastify";
import {getOrders} from "../../../utils/apiHandler/BusinessApiHandler";

if (registerables)
    ChartJS.register(...registerables);

const HomeBusiness = (props) => {

    const [allOrders, setAllOrders] = React.useState(props.orders || []);
    const [nOngoingOrders, setNOngoingOrders] = React.useState(0);

    useEffect(() => {
        getOrders().then(res => {
            setAllOrders(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        })
    }, []);

    const handleOrderChange = () => {
        getOrders().then(res => {
            setAllOrders(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        })
    }

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

    let days = [];
    for (let i = 0; i < 7; i++) {
        days.push(new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24 * (6 - i)).toLocaleDateString());
    }

    let orders = [];
    for (let i = 0; i < 7; i++) {

        for (let o of allOrders) {
            if (new Date(o.deliveryTime).toLocaleDateString() === days[i]) {
                orders[i] = orders[i] ? orders[i] + 1 : 1;
            }
        }
    }

    const data = {
        // x-axis label values
        labels: [days[0], days[1], days[2], days[3], days[4], days[5], days[6]],
        datasets: [
            {
                label: "# of orders",
                // y-axis data plotting values
                data: [orders[0], orders[1], orders[2], orders[3], orders[4], orders[5], orders[6]],
                fill: false,
                borderWidth: 4,
                backgroundColor: "#2F80ED",
                borderColor: '#2F80ED',
                responsive: true
            },
        ],
    }

    const options = {
        scales: {
            y: {min: 0}
        }
    };

    return (
        <Row className="justify-content-center text-center d-flex p-0" data-testid="HomeBusiness">
            <Navbar active="Home"/>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-4 p-0 mx-4">
                    <UserCard/>
                </Col>
                <Col className="col-3 p-0 mx-4">
                    <Card className="shadow bg-white p-4 h-100" style={{borderRadius: "20px", border: "none"}}
                          data-testid="status-card">
                        <Row className="align-items-center text-start d-flex h-100 mx-2 p-3">
                            <h2 className="sub-title">Total Orders:</h2>
                            <h2 className="details" style={{color: "#2f80ed"}} data-testid="total-orders">{allOrders.length || 0} order(s)</h2>
                            <h2 className="sub-title">Ongoing Orders:</h2>
                            <h2 className="details" style={{color: "#2f80ed"}} data-testid="ongoing-orders">{nOngoingOrders || 0} order(s)</h2>

                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-8 p-0">
                    <Card className="shadow p-5 bg-white my-4" style={{borderRadius: "20px", border: "none"}}>
                        <h2 className="title mb-4">Dashboard</h2>
                        <Line data={data} options={options} />
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-7 p-0">
                    <OrderPanelsList allOrders={allOrders} orderChange={handleOrderChange}/>
                </Col>
            </Row>
        </Row>
    );
}

export default HomeBusiness;

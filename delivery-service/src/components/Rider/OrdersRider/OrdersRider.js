import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import {BsFillCalendarEventFill} from "react-icons/bs";
import FullOrderPanelsList from "../FullOrderPanelsList/FullOrderPanelsList";
import {getDeliveries} from "../../../utils/apiHandler/RiderApiHandler";
import {toast} from "react-toastify";


const OrdersRider = () => {

    const [allOrders, setAllOrders] = React.useState([]);
    const [onGoingOrders, setOnGoingOrders] = React.useState([]);

    useEffect(() => {
        getDeliveries("HISTORY_ACCEPTED").then(res => {
            setAllOrders(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        })

        getDeliveries("ONGOING").then(res => {
            setOnGoingOrders(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        })

    }, []);

    const [filter, setFilter] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(allOrders);

    /*
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

     */

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
                            <h2 className="text-start details mx-4 mt-4">Total Orders: {allOrders.length + onGoingOrders.length}</h2>
                        </Col>
                        <Col className="col-5">
                            <h2 className="text-end details mx-4 mt-4">Ongoing Orders: {onGoingOrders.length}</h2>
                        </Col>
                    </Row>

                    <FullOrderPanelsList allOrders={filteredOrders}/>
                </Col>
            </Row>
        </Row>
    );
}

export default OrdersRider;

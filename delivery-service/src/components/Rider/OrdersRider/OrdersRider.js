import React, {useEffect, useState} from 'react';
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import {BsFillCalendarEventFill} from "react-icons/bs";
import FullOrderPanelsList from "../FullOrderPanelsList/FullOrderPanelsList";
import {getDeliveries} from "../../../utils/apiHandler/RiderApiHandler";
import {toast} from "react-toastify";

const OrdersRider = (props) => {

    const [allOrders, setAllOrders] = React.useState(props.orders || []);

    const [acceptedOrders, setAcceptedOrders] = React.useState([]);
    const [onGoingOrders, setOnGoingOrders] = React.useState([]);

    const [filter, setFilter] = React.useState("");
    const [filteredOrders, setFilteredOrders] = React.useState(allOrders);

    const notify = (message) => toast(message);

    useEffect(() => {

        getDeliveries("HISTORY_ACCEPTED").then(res => {
            if (res.data)
                setAcceptedOrders(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        })

        getDeliveries("ONGOING").then(res => {
            if (res.data)
                setOnGoingOrders(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        })

    }, []);

    useEffect(() => {
        setAllOrders(acceptedOrders.concat(onGoingOrders));
    }, [acceptedOrders, onGoingOrders]);

    useEffect(() => {
        setFilteredOrders(allOrders);
    }, [allOrders]);
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
        const results = allOrders.filter(o => new Date(o.orderRequest.order.date).toLocaleDateString() === new Date(filter).toLocaleDateString());

        if (results.length === 0) {
            notify("No results found.");
        } else {
            notify("Found results!");
        }

        setFilteredOrders(results);
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
                                    data-testid="date-filter"
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
                                <Button className="white-button" onClick={handleSearch} data-testid="date-button">Search</Button>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-6">
                            <h2 className="text-start details mx-4 mt-4" data-testid="total-orders">Total Orders: {allOrders.length}</h2>
                        </Col>
                        <Col className="col-5">
                            <h2 className="text-end details mx-4 mt-4" data-testid="ongoing-orders">Ongoing Orders: {onGoingOrders.length}</h2>
                        </Col>
                    </Row>

                    <FullOrderPanelsList allOrders={filteredOrders}/>
                </Col>
            </Row>
        </Row>
    );
}

export default OrdersRider;

import React, {useEffect} from 'react';
import Navbar from "../../Navbar/Navbar";
import {Card, Col, Container, Row} from "react-bootstrap";
import CreateOrderForm from "../CreateOrderForm/CreateOrderForm";
import OrderPanelsList from "../../Businness/OrderPanelsList/OrderPanelsList";
import {BsArrowUpCircleFill, BsFillCalendarEventFill} from "react-icons/bs";
import {getOrders} from "../../../utils/apiHandler/BusinessApiHandler";
import {toast} from "react-toastify";

const OrdersBusiness = () => {

    const [allOrders, setAllOrders] = React.useState([]);
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

                    <OrderPanelsList allOrders={allOrders} orderChange={handleOrderChange}/>
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

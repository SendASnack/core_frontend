import React from 'react';
import Navbar from "../Navbar/Navbar";
import {Col, Row} from "react-bootstrap";
import UserCard from "../UserCard/UserCard";
import StatusCard from "../StatusPanel/StatusCard";
import GpsPanel from "../GpsPanel/GpsPanel";
import OrderPanelsList from "../OrderPanelsList/OrderPanelsList";

const Home = () => {

    const [order, setOrder] = React.useState(undefined);

    return (
        <Row className="justify-content-center text-center d-flex p-0" data-testid="Home">
            <Navbar active="Home"/>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-4 p-0 mx-4">
                    <UserCard />
                </Col>
                <Col className="col-3 p-0 mx-4">
                    <StatusCard ongoing={order}/>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-8 p-0">
                    <GpsPanel ongoing={order} />
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-7 p-0">
                    <OrderPanelsList on_order_changed={setOrder.bind(this)} disabled={order !== undefined} />
                </Col>
            </Row>

        </Row>
    );
}
export default Home;

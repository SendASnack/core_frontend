import React, {useEffect} from 'react';
import Navbar from "../../Navbar/Navbar";
import {Col, Row} from "react-bootstrap";
import UserCard from "../UserCard/UserCard";
import StatusCard from "../../StatusCard/StatusCard";
import GpsPanel from "../GpsPanel/GpsPanel";
import OrderPanelsList from "../OrderPanelsList/OrderPanelsList";
import {changeAvailability, getDeliveries} from "../../../utils/apiHandler/RiderApiHandler";
import {toast} from "react-toastify";

const HomeRider = () => {

    const [allOrders, setAllOrders] = React.useState([]);

    const [order, setOrder] = React.useState(undefined);
    const [offline, setOffline] = React.useState(false);

    useEffect(() => {

        getDeliveries("AVAILABLE").then(res => {
            setAllOrders(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        })

        getDeliveries("ONGOING").then(res => {
            setOrder(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        });
    }, []);

    const handleOrder = () => {

        getDeliveries("ONGOING").then(res => {
            setOrder(res.data);
        }).catch(err => {
            toast.warning("Unexpected error, please refresh the page");
        });
    }

    const handleStatusChange = () => {

        if (!order) {
            let availabilityStatus = offline ? "OFFLINE" : "ONLINE";
            let username = localStorage.getItem("username");

            changeAvailability(username, availabilityStatus).then(res => {
                setOffline(!offline);
                toast("Status changed successfully");
            }).catch(err => {
                toast.warning("Unable to change status");
            });
        }
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
                    <OrderPanelsList allOrders={allOrders} on_order_changed={handleOrder} disabled={order !== undefined || offline} />
                </Col>
            </Row>
        </Row>
    );
}
export default HomeRider;

import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import OrderPanel from "../OrderPanel/OrderPanel";
import {changeOrderStatus} from "../../../utils/apiHandler/BusinessApiHandler";
import {toast} from "react-toastify";

const OrderPanelsList = (props) => {

    const [orders, setOrders] = useState(props.allOrders);

    useEffect(() => {
        if (props.allOrders) {
            setOrders(props.allOrders.reverse());
        }

    }, [props.allOrders]);

    const notify = (message) => toast(message);

    const handleReady = (orderId) => {

        changeOrderStatus(orderId, "READY").then(res => {

            if (props.orderChange) {
                props.orderChange();
            }
            notify("Order is ready!");

        }).catch(err => {
            notify("Error changing order status!");
        })
    }

    let panelsList = [];
    for (let idx in orders) {
        let order = orders[idx];
        panelsList.push(
            <Row key={"business-order-" + order.id} className="my-4">
                <OrderPanel number={idx} order={order} onReady={handleReady}/>
            </Row>
        );
    }

    if (panelsList.length === 0) {
        return (
            <Row className="mb-4" data-testid="OrderPanelsList">
                <h2 className="details text-start mt-5">No results found.</h2>
            </Row>
        );
    }

    return (
        <Row className="mb-4" data-testid="OrderPanelsList">
            {panelsList}
        </Row>
    );
}

export default OrderPanelsList;

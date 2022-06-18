import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import OrderPanel from "../OrderPanel/OrderPanel";

const OrderPanelsList = (props) => {

    const [orders, setOrders] = useState(props.allOrders);

    const handleDecline = (orderId) => {
        const newOrders = orders.filter(o => o.id !== orderId);
        setOrders(newOrders);
    }

    const handleAccept = (orderId) => {
        const order = orders.filter(o => o.id === orderId)[0];
        const newOrders = orders.filter(o => o.id !== orderId);
        setOrders(newOrders);

        if (props.on_order_changed) {
            props.on_order_changed(order);
        }
    }

    let panelsList = [];
    for (let idx in orders) {
        let order = orders[idx];
        panelsList.push(
            <Row key={"rider-order-" + order.id} className="my-4">
                <OrderPanel number={idx} order={order} disabled={props.disabled}
                onDecline={handleDecline.bind(this)} onAccept={handleAccept.bind(this)}/>
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

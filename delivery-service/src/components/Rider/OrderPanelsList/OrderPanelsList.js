import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import OrderPanel from "../OrderPanel/OrderPanel";
import {acceptDelivery, rejectDelivery} from "../../../utils/apiHandler/RiderApiHandler";
import {toast} from "react-toastify";

const OrderPanelsList = (props) => {

    const [orders, setOrders] = React.useState(props.allOrders);

    useEffect(() => {
        setOrders(props.allOrders);
    }, [props.allOrders]);

    const handleDecline = (orderId) => {

        rejectDelivery(orderId).then(res => {

            const newOrders = orders.filter(o => o.id !== orderId);
            setOrders(newOrders);

            toast.success("Delivery declined!");

        }).catch(err => {
            toast.error("Unable to decline order");
        })
    }

    const handleAccept = (orderId) => {

        const order = orders.filter(o => o.id === orderId)[0];

        acceptDelivery(orderId).then(res => {

            const newOrders = orders.filter(o => o.id !== orderId);
            setOrders(newOrders);

            if (props.on_order_changed) {
                props.on_order_changed(order);
            }

            toast.success("Delivery accepted!");

        }).catch(err => {
            toast.warning("Unable to accept delivery");
        });
    }

    let panelsList = [];
    for (let idx in orders) {
        let orderAll = orders[idx];
        if (new Date(orderAll.orderRequest.deliveryTime) > new Date() ) {
            panelsList.push(
                <Row key={"rider-order-" + orderAll.id} className="my-4">
                    <OrderPanel number={idx} orderId={orderAll.id} order={orderAll.orderRequest.order} costumer={orderAll.orderRequest.costumer}
                                deliveryTime={orderAll.orderRequest.deliveryTime} disabled={props.disabled}
                                onDecline={handleDecline} onAccept={handleAccept}/>
                </Row>
            );
        }
    }

    return (
        <Row className="mb-4" data-testid="OrderPanelsList">
            {panelsList}
        </Row>
    );
}

export default OrderPanelsList;

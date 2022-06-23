import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import FullOrderPanel from "../FullOrderPanel/FullOrderPanel";
import {rejectDelivery} from "../../../utils/apiHandler/RiderApiHandler";
import {toast} from "react-toastify";


const FullOrderPanelsList = (props) => {

    const [orders, setOrders] = useState(props.allOrders);

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

    let panelsList = [];
    for (let idx in orders) {
        let orderAll = orders[idx];
        panelsList.push(
            <Row key={"business-order-" + orderAll.id} className="my-4">
                <FullOrderPanel number={idx} number={idx} orderId={orderAll.id} order={orderAll.orderRequest.order} costumer={orderAll.orderRequest.costumer}
                                deliveryTime={orderAll.orderRequest.deliveryTime} onDecline={handleDecline}/>
            </Row>
        );
    }

    if (panelsList.length === 0) {
        return (
            <Row className="mb-4" data-testid="FullOrderPanelsList">
                <h2 className="details text-start mt-5">No results found.</h2>
            </Row>
        );
    }

    return (
        <Row className="mb-4" data-testid="FullOrderPanelsList">
            {panelsList}
        </Row>
    );
}
export default FullOrderPanelsList;

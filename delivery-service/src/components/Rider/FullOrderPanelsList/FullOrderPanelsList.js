import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Row} from "react-bootstrap";
import OrderPanel from "../../Businness/OrderPanel/OrderPanel";
import FullOrderPanel from "../FullOrderPanel/FullOrderPanel";


const FullOrderPanelsList = (props) => {

    const [orders, setOrders] = useState(props.allOrders);

    useEffect(() => {
        setOrders(props.allOrders);
    }, [props.allOrders]);

    const handleDecline = (orderId) => {
        const newOrders = orders.filter(o => o.id !== orderId);
        setOrders(newOrders);
    }

    let panelsList = [];
    for (let idx in orders) {
        let order = orders[idx];
        panelsList.push(
            <Row key={"business-order-" + order.id} className="my-4">
                <FullOrderPanel number={idx} order={order} onDecline={handleDecline}/>
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
export default FullOrderPanelsList;

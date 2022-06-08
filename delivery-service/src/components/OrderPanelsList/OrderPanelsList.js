import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import OrderPanel from "../OrderPanel/OrderPanel";

const OrderPanelsList = (props) => {

    const allOrders = [
        {
            "id": 1,
            "costumer": {
                "name": "Daniela Dias",
                "email": "ddias@ua.pt",
                "address": {
                    "city": "Aveiro",
                    "street": "Rua do Sol",
                    "postalCode": "5680-654"
                }
            },
            "order": {
                "date": "2022-05-30 00:00:00",
                "totalPrice": 25.00,
                "products": [
                    {
                        "name": "Product 1",
                        "description": "This is the new product",
                        "ingredients": [
                            "Lettice",
                            "Tomato"
                        ],
                        "price": 25.00
                    }
                ]
            },
            "deliveryTime": "2022-05-31 01:00:00"
        },
        {
            "id": 2,
            "costumer": {
                "name": "Daniela Dias",
                "email": "ddias@ua.pt",
                "address": {
                    "city": "Aveiro",
                    "street": "Rua do Sol",
                    "postalCode": "5680-654"
                }
            },
            "order": {
                "date": "2022-05-30 00:00:00",
                "totalPrice": 25.00,
                "products": [
                    {
                        "name": "Product 1",
                        "description": "This is the new product",
                        "ingredients": [
                            "Lettice",
                            "Tomato"
                        ],
                        "price": 25.00
                    }
                ]
            },
            "deliveryTime": "2022-06-31 01:00:00"
        }
    ];

    const [orders, setOrders] = useState(allOrders);

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
    for (let order of orders) {
        panelsList.push(
            <Row key={order.id} className="my-4">
                <OrderPanel key={order.id} order={order} disabled={props.disabled}
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

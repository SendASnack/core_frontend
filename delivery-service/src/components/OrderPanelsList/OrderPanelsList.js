import React from 'react';
import {Row} from "react-bootstrap";
import OrderPanel from "../OrderPanel/OrderPanel";

const OrderPanelsList = () => {

    const orders = [
        {
            "costumer": {
                "name": "Costumer",
                "email": "",
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
        }
    ];

    let panelsList = [];
    for (let order of orders) {
        panelsList.push(
            <Row>
                <OrderPanel key={order.costumer.email + "-" + order.order.date} city={order.costumer.address.city}
                            street={order.costumer.address.street} postalCode={order.costumer.address.postalCode} deliveryTime={order.deliveryTime}/>
            </Row>
        );
    }

    return (
        <Row data-testid="OrderPanelsList">
            {panelsList}
        </Row>
    );
}

export default OrderPanelsList;

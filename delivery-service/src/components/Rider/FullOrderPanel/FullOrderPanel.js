import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";

const FullOrderPanel = (props) => {

    const [orderId, setOrderId] = React.useState(props.orderId);

    // Address details
    const [city, setCity] = React.useState(undefined);
    const [street, setStreet] = React.useState(undefined);
    const [postalCode, setPostalCode] = React.useState(undefined);

    // Delivery time
    const [delivery, setDelivery] = React.useState(undefined);

    // Order details
    const [orderDate, setOrderDate] = React.useState(undefined);
    const [totalPrice, setTotalPrice] = React.useState(undefined);
    const [products, setProducts] = React.useState(undefined);

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (props.order && props.costumer) {
            setOrderId(props.orderId);
            setOrderDate(props.order.date);
            setTotalPrice(props.order.totalPrice);
            setProducts(props.order.products);
            setCity(props.costumer.address.city);
            setStreet(props.costumer.address.street);
            setPostalCode(props.costumer.address.postalCode);
            setDelivery(props.deliveryTime);
        }
    }, [props]);

    const handleOpen = () => {
        setOpen(!open);
    }

    let productPanels = [];
    for (let idx in products) {
        let product = products[idx];

        let ingredientPanels = []; let i = 0;
        for (let ingredient of product.ingredients) {
            ingredientPanels.push(
                <h2 className="order-details" key={i++}>{ingredient}</h2>
            );
        }

        productPanels.push(
            <Col className="col-4 my-3">
                <h2 className="order-details">{product.name} <span style={{color: "#2F80ED"}}>{product.price} €</span></h2>
                <h2 className="small-details mb-3">{product.description}</h2>
                {ingredientPanels}
            </Col>
        );
    }

    let id = "order-panel";
    if (props.number)
        id = id + "-" + props.number;

    if (open) {
        return(
            <Card className="shadow p-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid={id}>
                <Row className="align-items-center d-flex">
                    <Col className="col-3">
                        <Image className="order-image m-3 shadow" src="/Person A.jpg"  />
                    </Col>
                    <Col className="text-start m-2">
                        <Row>
                            <Col className="col-4">
                                <h2 className="order-title">Address</h2>
                                <h2 className="order-details">{city}</h2>
                                <h2 className="order-details">{street}</h2>
                                <h2 className="order-details">{postalCode}</h2>
                            </Col>
                            <Col className="col-6">
                                <h2 className="order-title">Total Price</h2>
                                <h2 className="order-details mt-3">{totalPrice} €</h2>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-3">
                        <h2 className="order-details">{new Date(orderDate).toLocaleDateString()}</h2>
                        <Row className="mt-5 w-75">
                            <Button className="blue-button" onClick={handleOpen}>Read more</Button>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-start mx-5 my-3">
                        <Row>
                            <h2 className="order-title my-3">Products</h2>
                            {productPanels}
                        </Row>
                    </Col>
                </Row>
            </Card>
        );
    }


    return(
        <Card className="shadow p-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid={id}>
            <Row className="align-items-center d-flex">
                <Col className="col-3">
                    <Image className="order-image m-3 shadow" src="/Person A.jpg"  />
                </Col>
                <Col className="text-start m-2">
                    <Row>
                        <Col className="col-4">
                            <h2 className="order-title">Address</h2>
                            <h2 className="order-details">{city}</h2>
                            <h2 className="order-details">{street}</h2>
                            <h2 className="order-details">{postalCode}</h2>
                        </Col>
                        <Col className="col-6">
                            <h2 className="order-title">Total Price</h2>
                            <h2 className="order-details mt-3">{totalPrice} €</h2>
                        </Col>
                    </Row>
                </Col>
                <Col className="col-3">
                    <h2 className="order-details">{new Date(orderDate).toLocaleDateString()}</h2>
                    <Row className="mt-5 w-75">
                        <Button className="blue-button" onClick={handleOpen}>Read more</Button>
                    </Row>

                </Col>
            </Row>
        </Card>
    );
}

export default FullOrderPanel;

import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Col, Image, Row} from "react-bootstrap";

const FullOrderPanel = (props) => {

    const [orderId, setOrderId] = useState(undefined);

    // Address details
    const [city, setCity] = useState(undefined);
    const [street, setStreet] = useState(undefined);
    const [postalCode, setPostalCode] = useState(undefined);

    // Delivery time
    const [delivery, setDelivery] = useState(undefined);

    // Order details
    const [orderDate, setOrderDate] = useState(undefined);
    const [totalPrice, setTotalPrice] = useState(undefined);
    const [products, setProducts] = useState(undefined);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (props.order) {
            setOrderId(props.order.id);
            setCity(props.order.costumer.address.city);
            setStreet(props.order.costumer.address.street);
            setPostalCode(props.order.costumer.address.postalCode);
            setDelivery(props.order.deliveryTime);
            setOrderDate(props.order.order.date);
            setTotalPrice(props.order.order.totalPrice);
            setProducts(props.order.order.products);
        }
    }, [props]);

    const handleOpen = () => {
        setOpen(!open);
    }

    let productPanels = [];
    for (let idx in products) {
        let product = products[idx];

        let ingredientPanels = [];
        for (let ingredient of product.ingredients) {
            ingredientPanels.push(
                <h2 className="order-details">{ingredient}</h2>
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

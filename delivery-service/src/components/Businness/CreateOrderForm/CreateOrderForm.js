import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {toast} from "react-toastify";

const CreateOrderForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [totalPrice, setTotalPrice] = useState(0);
    const [productsPanels, setProductsPanels] = useState([
        <Form.Group key={"product-" + 0} className="mb-3">
            <Row>
                <Col>
                    <Form.Control className="mb-2" type="email" placeholder="Name"
                                  onChange={event => handleProductName(0, event.target.value)}/>
                    <Form.Control className="mb-2" type="email" placeholder="Description"
                                  onChange={event => handleProductDescription(0, event.target.value)}/>
                    <Form.Control className="mb-2" type="email" placeholder="Price"
                                  onChange={event => handleProductPrice(0, event.target.value)}/>
                </Col>
                <Col>
                    <Form.Control className="mb-3" as="textarea" rows={5} placeholder="Ingredients"
                                  onChange={event => handleProductIngredients(0, event.target.value)}/>
                </Col>
            </Row>
        </Form.Group>
    ]);
    const [nProducts, setNProducts] = useState(1);
    const [products, setProducts] = useState([]);

    const [delivery, setDelivery] = useState(undefined);

    const notify = (message) => toast(message);

    useEffect(() => {

        let newPanels = [];
        for (let i = 0; i < nProducts; i++) {
            newPanels.push(
                <Form.Group key={"product-" + i} className="mb-3">
                    <Row>
                        <Col>
                            <Form.Control className="mb-2" type="text" placeholder="Name"
                                          onChange={event => handleProductName(i, event.target.value)}/>
                            <Form.Control className="mb-2" type="text" placeholder="Description"
                                          onChange={event => handleProductDescription(i, event.target.value)}/>
                            <Form.Control className="mb-2" type="number" placeholder="Price"
                                          onChange={event => handleProductPrice(i, event.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Control className="mb-3" as="textarea" rows={5} placeholder="Ingredients"
                                          onChange={event => handleProductIngredients(i, event.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>);
        }

        setProductsPanels(newPanels);

    }, [products]);

    const handleNewProduct = () => {
        setProductsPanels([...productsPanels,
            <Form.Group key={"product-" + nProducts} className="mb-3">
                <Row>
                    <Col>
                        <Form.Control className="mb-2" type="text" placeholder="Name"
                                      onChange={event => handleProductName(nProducts, event.target.value)}/>
                        <Form.Control className="mb-2" type="text" placeholder="Description"
                                      onChange={event => handleProductDescription(nProducts, event.target.value)}/>
                        <Form.Control className="mb-2" type="number" placeholder="Price"
                                      onChange={event => handleProductPrice(nProducts, event.target.value)}/>
                    </Col>
                    <Col>
                        <Form.Control className="mb-3" as="textarea" rows={5} placeholder="Ingredients"
                                      onChange={event => handleProductIngredients(nProducts, event.target.value)}/>
                    </Col>
                </Row>
            </Form.Group>
        ]);
        setNProducts(nProducts + 1);
    };

    const handleProductName = (productNumber, name) => {

        const newProducts = [...products].filter(product => product.number !== productNumber);

        const oldProduct = products.find(product => product.number === productNumber);
        if (oldProduct) {
            oldProduct.name = name;
            newProducts.push(oldProduct);
        } else {
            newProducts.push(
                {number: productNumber, name: name, description: "", price: 0, ingredients: ""}
            );
        }

        setProducts(newProducts);
    }

    const handleProductDescription = (productNumber, description) => {

        const newProducts = [...products].filter(product => product.number !== productNumber);

        const oldProduct = products.find(product => product.number === productNumber);
        if (oldProduct) {
            oldProduct.description = description;
            newProducts.push(oldProduct);
        } else {
            newProducts.push(
                {number: productNumber, name: "", description: description, price: 0, ingredients: ""}
            );
        }

        setProducts(newProducts);
    }

    const handleProductPrice = (productNumber, price) => {

        const newProducts = [...products].filter(product => product.number !== productNumber);

        const oldProduct = products.find(product => product.number === productNumber);
        if (oldProduct) {
            oldProduct.price = price;
            newProducts.push(oldProduct);
        } else {
            newProducts.push(
                {number: productNumber, name: "", description: "", price: parseInt(price), ingredients: ""}
            );
        }

        setProducts(newProducts);
    }

    const handleProductIngredients = (productNumber, ingredients) => {

        let newProducts = [...products].filter(product => product.number !== productNumber);

        let oldProduct = products.find(product => product.number === productNumber);

        if (oldProduct) {

            const allIngredients = ingredients.split("\n");

            oldProduct.ingredients = allIngredients;
            newProducts.push(oldProduct);

        } else {
            newProducts.push(
                {number: productNumber, name: "", description: "", price: 0, ingredients: ingredients}
            );
        }

        setProducts(newProducts);
    }

    const handleSubmit = () => {

        if (!name || !email || !city || !street || !postalCode || !totalPrice || products.length === 0 || delivery) {
            notify("Please fill in all fields!")
            return;
        }

        let expectedPrice = 0;
        for (let product of products) {
            expectedPrice += product.price;
        }

        if (totalPrice !== expectedPrice) {
            notify("Total price doesn't match!")
            return;
        }

        notify("Order submitted!");
    }

    return (
        <Form className="mb-5" data-testid="create-order-form">
            <Card className="shadow p-5 bg-white my-4" style={{borderRadius: "20px", border: "none"}}>
                <h2 className="sub-title">Costumer Information</h2>
                <Form.Group className="mb-3">
                    <Form.Label className="details">Costumer Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name"
                                  onChange={event => setName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="details">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                                  onChange={event => setEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="details">Address</Form.Label>
                    <Form.Control className="mb-3" type="text" placeholder="Enter city"
                                  onChange={event => setCity(event.target.value)}/>
                    <Form.Control className="my-3" type="email" placeholder="Enter street"
                                  onChange={event => setStreet(event.target.value)}/>
                    <Form.Control className="mt-3" type="text" placeholder="Enter postal code"
                                  onChange={event => setPostalCode(event.target.value)}/>
                </Form.Group>
            </Card>
            <Card className="shadow p-5 bg-white my-4" style={{borderRadius: "20px", border: "none"}}>
                <h2 className="sub-title">Order Information</h2>
                <Form.Group className="mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label className="details">Total Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter total price"
                                      onChange={event => setTotalPrice(event.target.value)}/>
                    </Form.Group>
                    <Form.Label className="details mb-4">Products</Form.Label>
                    {productsPanels}
                    <Button className="justify-content-left d-flex" variant="primary" onClick={handleNewProduct}>
                        + New product
                    </Button>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="details">Delivery time</Form.Label>
                    <Form.Control type="datetime-local" placeholder="Enter delivery time"
                                  onChange={event => setDelivery(event.target.value)}/>
                </Form.Group>
            </Card>
            <Button className="blue-button px-4" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default CreateOrderForm;

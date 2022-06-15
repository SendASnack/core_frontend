import React from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";

const CreateOrderForm = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [city, setCity] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');

    const [totalPrice, setTotalPrice] = React.useState(0);
    const [products, setProducts] = React.useState([
        <Form.Group key={"product-" + 1} className="mb-3">
            <Row>
                <Col>
                    <Form.Control className="mb-2" type="email" placeholder="Name"/>
                    <Form.Control className="mb-2" type="email" placeholder="Description"/>
                    <Form.Control className="mb-2" type="email" placeholder="Price"/>
                </Col>
                <Col>
                    <Form.Control className="mb-3" as="textarea" rows={5} placeholder="Ingredients"/>
                </Col>
            </Row>
        </Form.Group>
    ]);
    const [nProducts, setNProducts] = React.useState(1);

    const [delivery, setDelivery] = React.useState(undefined);

    const handleNewProduct = () => {
        setProducts([...products,
            <Form.Group key={"product-" + nProducts+1} className="mb-3">
                <Row>
                    <Col>
                        <Form.Control className="mb-2" type="email" placeholder="Name"/>
                        <Form.Control className="mb-2" type="email" placeholder="Description"/>
                        <Form.Control className="mb-2" type="email" placeholder="Price"/>
                    </Col>
                    <Col>
                        <Form.Control className="mb-3" as="textarea" rows={5} placeholder="Ingredients"/>
                    </Col>
                </Row>
            </Form.Group>
        ]);
        setNProducts(nProducts + 1);
    };

    const handleSubmit = () => {

        /* Ingredients must be separated by commas
        "ingredients": [
                    "Lettice",
                    "Tomato"
                ],
         */

    }

    return (
        <Form className="mb-5" data-testid="create-order-form">
            <Card className="shadow p-5 bg-white my-4" style={{borderRadius: "20px", border: "none"}}>
                <h2 className="sub-title">Costumer Information</h2>
                <Form.Group className="mb-3">
                    <Form.Label className="details">Costumer Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter name" onChange={event => setName(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="details">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="details">Address</Form.Label>
                    <Form.Control className="mb-3" type="text" placeholder="Enter city" onChange={event => setCity(event.target.value)}/>
                    <Form.Control className="my-3" type="email" placeholder="Enter street" onChange={event => setStreet(event.target.value)}/>
                    <Form.Control className="mt-3" type="text" placeholder="Enter postal code" onChange={event => setPostalCode(event.target.value)}/>
                </Form.Group>
            </Card>
            <Card className="shadow p-5 bg-white my-4" style={{borderRadius: "20px", border: "none"}}>
                <h2 className="sub-title">Order Information</h2>
                <Form.Group className="mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label className="details">Total Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter total price" onChange={event => setTotalPrice(event.target.value)}/>
                    </Form.Group>
                    <Form.Label className="details mb-4">Products</Form.Label>
                    {products}
                    <Button className="justify-content-left d-flex" variant="primary" onClick={handleNewProduct}>
                        + New product
                    </Button>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="details">Delivery time</Form.Label>
                    <Form.Control type="datetime-local" placeholder="Enter delivery time" onChange={event => setDelivery(event.target.value)}/>
                </Form.Group>
            </Card>
            <Button className="blue-button px-4" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default CreateOrderForm;

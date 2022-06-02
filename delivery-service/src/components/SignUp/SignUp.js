import React from 'react';
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import Input from "../Input/Input";
import Switch from "../Switch/Switch";
import {Link} from "react-router-dom";

const SignUp = () => {

    const [currentUser, setCurrentUser] = React.useState("Delivery Person");

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const handleSwitch = () => {
        if (currentUser === "Delivery Person") {
            setCurrentUser("Verified Store");
        } else {
            setCurrentUser("Delivery Person");
        }
    };

    const handleSubmit = () => {
        console.log(name, email, phone, password, confirmPassword);
    };

    return(
        <Container className="justify-content-center text-center d-flex my-4">
            <Col className="col-5 mb-4">
                <Row className="justify-content-center d-flex">
                    <Image className="w-50" src='/Delivery Service.png' alt='Delivery Service logo' />
                </Row>
                <Row className='my-4'>
                    <h2 style={{fontWeight: "bold"}}>Sign Up</h2>
                    <span>You already have an account? <a className='link' href='/login'>Login</a>!</span>
                </Row>
                <Row className='justify-content-center d-flex py-4'>
                    <Switch selected={currentUser} on_value_changed={handleSwitch}/>
                </Row>
                <Row>
                    <form className='input-form'>
                        <Input type="text" label="Name" on_value_changed={setName}/>
                        <Input type="email" label="Email" n_value_changed={setEmail}/>
                        <Input type="phone" label="Phone No." on_value_changed={setPhone}/>
                        <Input type="password" label="Password" on_value_changed={setPassword}/>
                        <Input type="password" label="Re-enter Password" n_value_changed={setConfirmPassword}/>
                    </form>
                </Row>
                <Row className='justify-content-center text-center d-flex mt-4'>
                    <p className="text-muted">Signing up as {currentUser}</p>
                    <Button className="w-25" type="submit" class="sign-up" style={{borderRadius: "15px"}} onClick={handleSubmit}>Sign Up</Button>
                </Row>
            </Col>
        </Container>
    );
};

export default SignUp;

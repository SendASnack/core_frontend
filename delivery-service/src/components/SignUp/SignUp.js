import React from 'react';
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import Input from "../Input/Input";
import Switch from "../Switch/Switch";

const SignUp = () => {

    const [currentUser, setCurrentUser] = React.useState("Delivery Person");
    const handleSwitch = () => {
        if (currentUser === "Delivery Person") {
            setCurrentUser("Verified Store");
        } else {
            setCurrentUser("Delivery Person");
        }
    };


    return(
        <Container className="justify-content-center text-center d-flex my-4">
            <Col className="col-5 mb-4">
                <Row className="justify-content-center d-flex">
                    <Image className="w-50" src='/Delivery Service.png' alt='Delivery Service logo' />
                </Row>
                <Row className='my-4'>
                    <h2 style={{fontWeight: "bold"}}>Sign Up</h2>
                    <span>You already have an account? <a className='link' href='#'>Login</a>!</span>
                </Row>
                <Row className='justify-content-center d-flex py-4'>
                    <Switch selected={currentUser} on_value_changed={handleSwitch.bind(this)}/>
                </Row>
                <Row>
                    <form className='input-form'>
                        <Input type="text" label="Name" value="name"/>
                        <Input type="email" label="Email" value="email"/>
                        <Input type="phone" label="Phone No." value="phone"/>
                        <Input type="password" label="Password" value="password"/>
                        <Input type="password" label="Re-enter Password" value="confirmPassword"/>
                    </form>
                </Row>
                <Row className='justify-content-center text-center d-flex mt-4'>
                    <p className="text-muted">Signing up as {currentUser}</p>
                    <Button className="w-25" type="submit" class="sign-up" style={{borderRadius: "15px"}}>Sign Up</Button>
                </Row>
            </Col>
        </Container>
    );
};

export default SignUp;

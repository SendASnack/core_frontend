import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Input from "../Input/Input";
import {toast} from "react-toastify";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const notify = (message) => toast(message);

    const handleSubmit = () => {

        if (!email || !password){
            console.log(email)
            console.log(password)
            notify("Please fill all fields");
            return;
        }

        axios.post('http://localhost:8080/api/auth/login', {
            email: email,
            password: password
        })
            .then((response) => {
                notify(response.data.message);
                localStorage.setItem('token', response.data.token);
                setTimeout(() => window.location.replace("/"), 2000);
            }, (error) => {
                notify(JSON.parse(error.request.response)['message']);
                console.log(error);
            });
    };

    return (
        <Container className="justify-content-center text-center d-flex my-4" data-testid="Login">
            <Col md={5} className="col-5 mb-4">
                <Row className="justify-content-center d-flex">
                    <Image className="w-50" src='/Delivery Service.png' alt='Delivery Service logo' />
                </Row>
                <Row className='my-4'>
                    <h2 style={{fontWeight: "bold"}}>Login</h2>
                    <span>Don't have have an account? <a className='link' href='/signup'>Sign Up</a>!</span>
                </Row>
                <Row>
                    <form className='input-form'>
                        <Input type="email" label="Email" on_value_changed={setEmail}/>
                        <Input type="password" label="Password" on_value_changed={setPassword}/>
                    </form>
                </Row>
                <Row className='justify-content-center text-center d-flex mt-4'>
                    <Button className="w-25" type="submit" style={{borderRadius: "15px"}} onClick={handleSubmit}>Login</Button>
                </Row>
            </Col>
        </Container>
  );
};

export default Login;

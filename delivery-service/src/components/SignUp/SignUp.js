import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import Input from "../Input/Input";
import Switch from "../Switch/Switch";
import {toast} from "react-toastify";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [currentUser, setCurrentUser] = React.useState("Delivery Person");

    const [name, setName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const notify = (message) => toast(message);

    const checkEmail = () => {
        const testEmail =    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        return (testEmail.test(email));
    }

    const checkUsername = () =>{
        //from 3 to 20 in length no _ or . at the start/end/consecutive only allows for A-Z Numbers and _ .
        const testUserName=/^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/i;
        return (testUserName.test(username));
    }

    const passwordStrength = () => {
        const testPw = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/i;
        return (testPw.test(password));
    };

    const checkPasswords = () => {
        return (password === confirmPassword);
    };

    const handleSwitch = () => {
        if (currentUser === "Delivery Person") {
            setCurrentUser("Verified Store");
        } else {
            setCurrentUser("Delivery Person");
        }
    };

    const handleSubmit = () => {

        if (!username || !checkUsername() || username === "null") {
            notify("Please provide a valid username!");
            return;
        }

        if(!email || !checkEmail() || email === "null") {
            notify("Please provide a valid email!");
            return;
        }

        if(!password || !passwordStrength() || !checkPasswords() || password === "null") {
            notify("Please provide an password, it must have 4 characters and at least one number and one letter!");
            return;}

        let accountType;
        if (currentUser === "Delivery Person") {
            accountType = "RIDER";
        } else {
            accountType = "BUSINESS";
        }

        axios.post('http://localhost:8080/api/auth/register', {
            name: name,
            username: username,
            email: email,
            phoneNumber: phone,
            password: password,
            accountType: accountType
        })
            .then((response) => {
                notify(response.data.message);
                setTimeout(() => {
                    window.location.replace("/login");
                }, 1000);
            }, (error) => {
                notify(JSON.parse(error.request.response)['message']);
                console.log(error);
            });
    };

    return(
        <Container className="justify-content-center text-center d-flex my-4" data-testid="SignUp">
            <Col className="col-5 mb-4">
                <Row className="justify-content-center d-flex">
                    <Image className="w-50" src='/Delivery Service.png' alt='Delivery Service logo' />
                </Row>
                <Row className='my-4'>
                    <h2 style={{fontWeight: "bold"}}>Sign Up</h2>
                    <span>You already have an account? <a className='link' href='/login'>Login</a>!</span>
                </Row>
                <Switch selected={currentUser} on_value_changed={handleSwitch}/>
                <Row>
                    <form className='input-form'>
                        <Input type="text" label="Name" on_value_changed={setName}/>
                        <Input type="text" label="Username" on_value_changed={setUsername}/>
                        <Input type="email" label="Email" on_value_changed={setEmail}/>
                        <Input type="phone" label="Phone No." on_value_changed={setPhone}/>
                        <Input type="password" label="Password" on_value_changed={setPassword}/>
                        <Input type="password" label="Re-enter Password" on_value_changed={setConfirmPassword}/>
                    </form>
                </Row>
                <Row className='justify-content-center text-center d-flex mt-4'>
                    <p className="text-muted">Signing up as {currentUser}</p>
                    <Button data-testid="submit-button" className="w-25" type="submit" style={{borderRadius: "15px"}} onClick={handleSubmit}>Sign Up</Button>
                </Row>
            </Col>
        </Container>
    );
};

export default SignUp;

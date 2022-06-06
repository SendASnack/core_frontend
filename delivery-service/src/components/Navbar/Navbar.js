import React from 'react';
import {Button, Col, Container, Image, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Navbar.css';

const Navbar = (props) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    let home = "link-item " + (props.active && props.active === "Home" ? "active": "");
    let orders = "link-item " + (props.active && props.active === "Orders" ? "active": "");
    let profile = "link-item " + (props.active && props.active === "Profile" ? "active": "");


    return (
        <Row data-testid="Navbar" className="navbar-white justify-content-center align-items-center px-5 mx-0">
            <Col className="col-1 justify-content-center d-flex">
                <Image style={{width: "50%", minWidth: "30px"}} src='/Delivery Service.png' alt='Delivery Service logo'/>
            </Col>
            <Col className="col-lg-3 col-md-5 col-sm-5">
                <Row className="link-items">
                    <Col>
                        <Link to='/' className={home}>Home</Link>
                    </Col>
                    <Col>
                        <Link to='/orders' className={orders}>Orders</Link>
                    </Col>
                    <Col>
                        <Link to='/profile' className={profile}>Profile</Link>
                    </Col>
                </Row>
            </Col>
            <Col className="justify-content-end d-flex">
                <Button onClick={handleLogout} className="logout-button">Logout</Button>
            </Col>
        </Row>
    );
}

export default Navbar;

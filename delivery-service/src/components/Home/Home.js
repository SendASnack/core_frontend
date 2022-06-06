import React from 'react';
import Navbar from "../Navbar/Navbar";
import {Col, Row} from "react-bootstrap";
import UserCard from "../UserCard/UserCard";

const Home = () => {

    return (
        <Row className="justify-content-center text-center d-flex p-0" data-testid="Home">
            <Navbar active="Home"/>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-7">
                    <UserCard />
                </Col>
                <Col className="col-4">
                    <UserCard />

                </Col>
            </Row>

        </Row>
    );
}
export default Home;

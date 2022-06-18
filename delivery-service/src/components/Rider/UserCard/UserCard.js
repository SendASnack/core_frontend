import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";


const UserCard = () =>  {

    const user = {"Name": "Jonathan D.", "Rating": 4.9, "Email": "jonathan@ua.pt", "Phone": "918234965", "Image": "/Person B.jpg"};
    return (
        <Card className="shadow p-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid="UserCard">
            <Row className="align-items-center d-flex">
                <Col>
                    <Image className="user-image m-3 shadow" src={user.Image}  />
                </Col>
                <Col className="text-start m-1">
                    <h2 className="title">{user.Name}</h2>
                    <p><span style={{fontWeight: "bold"}}>{user.Rating}</span> out of 5 Rating</p>
                    <h2 className="details">{user.Email}</h2>
                    <h2 className="details">+351 {user.Phone}</h2>
                </Col>
            </Row>
        </Card>
    )
};

export default UserCard;

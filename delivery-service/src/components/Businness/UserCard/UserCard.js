import React, {useEffect, useState} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import {getBusinessProfile} from "../../../utils/apiHandler/BusinessApiHandler";


const UserCard = () =>  {

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        let username = localStorage.getItem('username');
        getBusinessProfile(username).then(res => {
            setUser(res.data);
        }).catch(err => {
            console.log("Unexpected error, please refresh the page");
        });
    }, []);

    if (!user) {
        return <div data-testid="UserCard">Loading...</div>
    }

    return (
        <Card className="shadow p-4 bg-white" style={{borderRadius: "20px", border: "none"}} data-testid="UserCard">
            <Row className="align-items-center d-flex">
                <Col>
                    <Image className="user-image m-3 shadow" src={user.image || "/SendASnack 2 Black.png"}  />
                </Col>
                <Col className="text-start m-1">
                    <h2 className="title">{user.name}</h2>
                    <p style={{fontWeight: "bold", fontStyle: "italic"}}>{user.username}</p>
                    <h2 className="details mt-4">{user.email}</h2>
                    <h2 className="details">+351 {user.phoneNumber}</h2>
                </Col>
            </Row>
        </Card>
    )
};

export default UserCard;

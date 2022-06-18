import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import PasswordForm from "../../Forms/PasswordForm/PasswordForm";
import PhoneNoForm from "../../Forms/PhoneNoForm/PhoneNoForm";
import RideForm from "../../Forms/RideForm/RideForm";
import AddressForm from "../../Forms/AddressForm/AddressForm";

const ProfileBusiness = () => {

    const store = {"Name": "SendASnack", "Rating": 4.9, "Email": "sendasnack@ua.pt", "Phone": "918234965", "Image": "/SendASnack 2 Black.png",
    "City": "Houston, TX", "Street": "Wisteria st 30", "PostalCode": "3810-202"};
    const [cards, setCards] = React.useState([]);

    const addCards = () => {
        setCards([...cards,
            <Row key={cards.length+1} className="align-items-center d-flex">
                <Col className="col-5">
                    <Image className="my-3" src="/CreditCard.png" style={{width: "100%"}} />
                </Col>
                <Col className="col-3">
                    <h2 className="small-details">Cartão de crédito que termina em •••• 4871</h2>
                </Col>
                <Col className="col-3">
                    <Button className="white-button px-4">Set as Default</Button>
                </Col>
            </Row>
        ]);
    }

    return (
        <Row className="justify-content-center text-center d-flex p-0 mb-5" data-testid="ProfileBusiness">
            <Navbar active="Profile"/>
            <Row className="mt-5 justify-content-center d-flex">
                <Col className="col-6 me-2">
                    <Card className="shadow p-4 bg-white" style={{borderRadius: "20px", border: "none"}}>
                        <Row className="align-items-center d-flex">
                            <h2 className="title text-start mx-5 my-4">Profile</h2>
                            <Col className="mb-4">
                                <Image className="user-image m-4 shadow" src={store.Image} style={{width: "15vw", height: "15vw"}} />
                            </Col>
                            <Col className="text-start m-1">
                                <h2 className="sub-title">Name</h2>
                                <h2 className="details">{store.Name}</h2>
                                <h2 className="sub-title mt-4">Email</h2>
                                <h2 className="details">{store.Email}</h2>
                                <h2 className="sub-title mt-4">Phone No.</h2>
                                <h2 className="details">+351 {store.Phone}</h2>
                                <h2 className="sub-title mt-4">Address</h2>
                                <h2 className="details w-75">+351 {store.Street}, {store.City},{store.PostalCode}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-6 mb-4">
                                <Button className="blue-button px-4 w-50">Change Image</Button>
                            </Col>
                        </Row>
                        <Row className="align-items-center text-start d-flex my-3 mx-5">
                            <h2 className="sub-title mb-5">Payment Methods <span onClick={addCards} style={{color: "#2F80ED", cursor: "pointer"}}>+</span></h2>
                            <Image src="/CreditCard.png" style={{width: "20vw"}} />
                            <h2 className="small-details text-muted ms-4 mt-3">Default Card</h2>
                            {cards}
                        </Row>
                    </Card>


                </Col>
                <Col className="col-4 ms-2">
                    <PasswordForm/>
                    <PhoneNoForm/>
                    <AddressForm/>
                </Col>
            </Row>
        </Row>
    );
}

export default ProfileBusiness;

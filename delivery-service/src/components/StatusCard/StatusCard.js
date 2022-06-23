import React, {useEffect} from 'react';
import {Card, Col, Form, Image, Row} from "react-bootstrap";
import './StatusCard.css';
import {changeAvailability} from "../../utils/apiHandler/RiderApiHandler";
import {toast} from "react-toastify";

const StatusCard = (props) => {

    const [status, setStatus] = React.useState(props.ongoing ? "Busy" : "Free");
    const [image, setImage] = React.useState("/No Delivery.png");

    useEffect(() => {
        if (props.ongoing) {
            setImage("/OnGoing Delivery.png");
            setStatus("Busy");
        }
    }, [props]);

    const handleStatusChange = () => {

        if (!props.ongoing) {

            let availabilityStatus = status === "Offline" ? "ONLINE" : "OFFLINE";
            let username = localStorage.getItem("username");

            changeAvailability(username, availabilityStatus).then(res => {

                if (props.on_status_changed)
                    props.on_status_changed();

                if (availabilityStatus === "OFFLINE") {
                    setImage("/No Delivery.png");
                    setStatus("Offline");
                } else {
                    setImage("/No Delivery.png");
                    setStatus("Free");
                }

                toast("Status changed successfully");
            }).catch(err => {
                toast.warning("Unable to change status");
            });
        }
    }

    return (
        <Card className="shadow bg-white p-4 h-100" style={{borderRadius: "20px", border: "none"}}
              data-testid="status-card">
            <Row className="align-items-center d-flex h-100">
                <Col className="align-items-center justify-content-center d-flex mx-2 col-7">
                    <Image src={image} style={{width: "9vw"}}/>
                </Col>
                <Col className="mx-2 my-4">
                    <Row className="text-start">
                        <h2 className="status-title">Status</h2>
                        <h2 data-testid="status-text" className="status-details">{status}</h2>
                    </Row>

                    <Row className="text-start">
                        <Form>
                            <Form.Check
                                data-testid="status-switch"
                                type="switch"
                                id="offline-switch"
                                onClick={() => handleStatusChange()}
                            />
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
};

export default StatusCard;

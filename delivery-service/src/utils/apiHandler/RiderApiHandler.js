import axios from "axios";

const apiAddress = "http://20.77.90.223:8080/api/rider";
const authToken = localStorage.getItem('token');

// Rider API

async function acceptDelivery(deliveryId) {
    return axios.patch(apiAddress + "/deliveries/" + deliveryId + "/accept", {}, {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

async function rejectDelivery(deliveryId) {
    return axios.patch(apiAddress + "/deliveries/" + deliveryId + "/reject", {}, {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

async function changeDeliveryStatus(deliveryId, status) {
    return axios.patch(apiAddress + "/deliveries/" + deliveryId + "/status", {
        deliveryStatus: status
    }, {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

async function getRiderDeliveries() {
    return axios.get(apiAddress + "/deliveries", {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

async function getUserProfile(username) {
    return axios.get(apiAddress + '/profile/' + username, {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

async function changeAvailability(username, availability) {
    return axios.patch(apiAddress + '/profile/' + username + '/availability', {
        availabilityStatus: availability
    }, {
        headers: {
            'Authorization': 'Bearer ' + authToken,

        }
    });
}


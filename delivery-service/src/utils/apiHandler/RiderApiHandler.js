const axios = require("axios");

const apiAddress = "http://20.77.90.223:8080/api/rider";
const authToken = localStorage.getItem('token');

// Rider API

export const acceptDelivery = (deliveryId) => {
    return axios.patch(apiAddress + "/deliveries/" + deliveryId + "/accept",
        {},
        {
            headers: {
                "Authorization": "Bearer " + authToken,
            }
        }
    );
}

export const rejectDelivery = (deliveryId) => {
    return axios.patch(apiAddress + "/deliveries/" + deliveryId + "/reject",
        {},
        {
            headers: {
                "Authorization": "Bearer " + authToken,
            }
        }
    );
}

export const changeDeliveryStatus = (deliveryId, status) => {
    return axios.patch(apiAddress + "/deliveries/" + deliveryId + "/status", {
            deliveryStatus: status
        }, {
            headers: {
                "Authorization": "Bearer " + authToken,
            }
        }
    );
}

export const getDeliveries = (filter) => {
    return axios.get(apiAddress + "/deliveries", {
        params: {deliveryFilter: filter},
        headers: {
            "Authorization": "Bearer " + authToken,
        }
    });
}

export const getUserProfile = (username) => {
    return axios.get(apiAddress + "/profile/" + username, {
            headers: {
                "Authorization": "Bearer " + authToken,
            }
        }
    );
}

export const changeAvailability = (username, availability) => {
    return axios.patch(apiAddress + "/profile/" + username + "/availability",
        availability, {
            headers: {
                "Authorization": "Bearer " + authToken,
                "Content-Type": "application/json"
            }
        }
    );
}
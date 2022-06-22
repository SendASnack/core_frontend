const axios = require("axios");

const apiAddress = "http://20.77.90.223:8080/api/business";
const authToken = localStorage.getItem("token");

// Businesses API

export const createOrder = (order) => {
    return axios.post(apiAddress + "/orders", order, {
            headers: {
                "Authorization": "Bearer " + authToken,
            }
        }
    );
}

export const cancelOrder = (orderId) => {
    return axios.delete(apiAddress + "/orders/" + orderId, {
        headers: {
            "Authorization": "Bearer " + authToken,
        }
    });
}

export const changeOrderStatus = (orderId, status) => {
    return axios.patch(apiAddress + "/orders/" + orderId + "/status", status, {
            headers: {
                "Authorization": "Bearer " + authToken,
                "Content-Type": "application/json"
            }
        }
    );
}

export const getOrderStatus = (orderId) => {
    return axios.get(apiAddress + "/orders/" + orderId, {
        headers: {
            "Authorization": "Bearer " + authToken,
        }
    });
}

export const getOrders = () => {
    return axios.get(apiAddress + "/orders", {
            headers: {
                "Authorization": "Bearer " + authToken,
            }
        }
    );
}

export const getBusinessProfile = () => {
    return axios.get(apiAddress + "/profile", {
            headers: {
                "Authorization": "Bearer " + authToken,
            }
        }
    );
}
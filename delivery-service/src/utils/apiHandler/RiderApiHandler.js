const axios = require("axios");

const apiAddress = "http://20.77.90.223:8080/api/rider";
const authToken = localStorage.getItem("token");

// Rider API

const acceptDelivery = (deliveryId) => {
  return axios.patch(apiAddress + "/deliveries/" + deliveryId + "/accept",
    {},
    {
      headers: {
        "Authorization": "Bearer " + authToken,
      }
    }
  );
}

const rejectDelivery = (deliveryId) => {
  return axios.patch(
    apiAddress + "/deliveries/" + deliveryId + "/reject",
    {},
    {
      headers: {
        "Authorization": "Bearer " + authToken,
      }
    }
  );
}

const changeDeliveryStatus = (deliveryId, status) => {
  return axios.patch(apiAddress + "/deliveries/" + deliveryId + "/status", {
      deliveryStatus: status
    }, {
      headers: {
        "Authorization": "Bearer " + authToken,
      }
    }
  );
}

const getDeliveries = (filter) => {
  return axios.get(apiAddress + "/deliveries", {
    params: {deliveryFilter: filter},
    headers: {
      "Authorization": "Bearer " + authToken,
    }
  });
}

const getUserProfile = (username) => {
  return axios.get(apiAddress + "/profile/" + username, {
      headers: {
        "Authorization": "Bearer " + authToken,
      }
    }
  );
}

const changeAvailability = (username, availability) => {
  return axios.patch(apiAddress + "/profile/" + username + "/availability",
    availability,
    {
      headers: {
        "Authorization": "Bearer " + authToken,
        "Content-Type": "application/json"
      }
    }
  );
}

export {
  acceptDelivery,
  rejectDelivery,
  changeDeliveryStatus,
  getDeliveries,
  getUserProfile,
  changeAvailability
}
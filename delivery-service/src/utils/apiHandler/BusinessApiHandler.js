const axios = require("axios");

const apiAddress = "http://20.77.90.223:8080/api/business";
const authToken = localStorage.getItem("token");

// Businesses API

const createOrder = (order) => {
  return axios.post(apiAddress + "/orders", order, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    }
  );
}

const cancelOrder = (orderId) => {
  return axios.delete(apiAddress + "/orders/" + orderId, {
    headers: {
      Authorization: "Bearer " + authToken,
    },
  });
}

const changeOrderStatus = (orderId, status) => {
  return axios.patch(apiAddress + "/orders/" + orderId + "/status", status, {
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
    }
  );
}

const getOrderStatus = (orderId) => {
  return axios.get(apiAddress + "/orders/" + orderId, {
    headers: {
      Authorization: "Bearer " + authToken,
    },
  });
}

const getOrders = () => {
  return axios.get(apiAddress + "/orders", {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    }
  );
}

const getBusinessProfile = () => {
  return axios.get(apiAddress + "/profile", {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    }
  );
}

export {
  createOrder,
  cancelOrder,
  changeOrderStatus,
  getOrderStatus,
  getOrders,
  getBusinessProfile,
}
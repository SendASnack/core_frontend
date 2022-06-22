const axios = require('axios');

const apiAddress = "http://20.77.90.223:8080/api/business";
const authToken = localStorage.getItem("token");

// Businesses API

async function createOrder(order) {
  return axios.post(apiAddress + "/orders", order, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
    }
  });
}

async function cancelOrder(orderId) {
  return axios.delete(apiAddress + "/orders/" + orderId, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
    }
  });
}

async function changeOrderStatus(orderId, status) {
  return axios.patch(apiAddress + "/orders/" + orderId + "/status", status, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    }
  });
}

async function getOrderStatus(orderId) {
  return axios.get(apiAddress + "/orders/" + orderId, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
    }
  });
}

async function getOrders() {
  return axios.get(apiAddress + "/orders", {
    headers: {
      'Authorization': 'Bearer ' + authToken,
    }
  });
}

async function getBusinessProfile() {
  return axios.get(apiAddress + "/profile", {
    headers: {
      'Authorization': 'Bearer ' + authToken,
    }
  });
}

export {
  createOrder,
  cancelOrder,
  changeOrderStatus,
  getOrderStatus,
  getOrders,
  getBusinessProfile
}

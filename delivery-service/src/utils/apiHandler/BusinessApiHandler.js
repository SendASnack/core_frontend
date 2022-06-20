import axios from "axios";

const apiAddress = "http://20.77.90.223:8080/api/business";
const authToken = localStorage.getItem('token');

// Businesses API

async function createOrder(order) {
  return axios.post(apiAddress + '/orders',{
      orderRequest: order,
  }, {
      headers: {
          'Authorization': 'Bearer ' + authToken,
      }
  });
}

async function cancelOrder(orderId) {
    return axios.delete(apiAddress + '/orders/' + orderId, {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

async function changeOrderStatus(orderId, status) {
    return axios.put(apiAddress + '/orders/' + orderId, {
        orderStatus: status,
    }, {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

async function getOrderStatus(orderId) {
    return axios.get(apiAddress + '/orders/' + orderId, {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

async function getOrders() {
    return axios.get(apiAddress + '/orders', {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        }
    });
}

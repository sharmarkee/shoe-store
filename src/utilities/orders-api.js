import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  const response = sendRequest(`${BASE_URL}/cart`);
  console.log('orders-api response: ', response)
  return response
}
export function addCart(shoeId) {
  return sendRequest(`${BASE_URL}/cart/shoes/${shoeId}`, 'POST');
}

export function setShoeQuantity(shoeId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { shoeId, newQty });
}

export function checkout(payload) {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST', payload);
}

export function getAllForUser() {  
  return sendRequest(`${BASE_URL}`);
}
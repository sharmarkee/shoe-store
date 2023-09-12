import sendRequest from './send-request';

const BASE_URL = '/api/order';

export function getCart() {
  const response = sendRequest(`${BASE_URL}/cart`);
  return response
}
export function addShoeCart(shoeId) {
  return sendRequest(`${BASE_URL}/cart/shoes/${shoeId}`, 'POST');
}

export function setShoeQtyInCart(shoeId, newQuantity) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { shoeId, newQuantity });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}
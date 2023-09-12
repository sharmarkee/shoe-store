import sendRequest from './send-request';

const BASE_URL = '/api/orders';

export function getCart() {
  const response = sendRequest(`${BASE_URL}/cart`);
  return response
}
export function addItemToCart(shoeId) {
  return sendRequest(`${BASE_URL}/cart/shoess/${shoeId}`, 'POST');
}

export function setItemQtyInCart(shoeId, newQuantity) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { shoeId, newQuantity });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}
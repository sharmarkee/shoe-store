export default function Cart() {

  const total = useSelector(state =>
    formatPrice(state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
    ));

  const cart = useSelector(state => state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })));

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>AMOUNT</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          { cart.map( product => (
              <tr>
              <td>
                <img
                src={product.image}
                alt={product.title}
              />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                
                  <input type="number" readOnly value={product.amount} />
                  <button type="button"  onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1"/>
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ) ) }
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Proceed to Checkout</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>

    </Container>
  );
}
import './OrderDetail.css';
import ShoeItem from '../ShoeItem/ShoeItem';

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const shoeItems = order.shoeItems.map(shoe =>
    <ShoeItem
      ShoeItem={shoe}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="shoe-item-container flex-ctr-ctr flex-col scroll-y">
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-"
                  onClick={handleCheckout}
                  disabled={!shoeItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="order">Ready to Order?</div>
        }
      </div>
    </div>
  );
}
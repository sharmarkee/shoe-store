import './OrderListShoe.css';

export default function OrderListShoe({ order, activeOrder, setActiveOrder }) {
  return (
    <div
      className={`OrderListShoe ${order === activeOrder ? 'selected' : ''}`}
      onClick={() => setActiveOrder(order)}
    >
      <div>
        <div>Order Id: <span className="smaller">{order.orderId}</span></div>
        <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
      </div>
      <div className="align-rt">
        <div>${order.orderTotal.toFixed(2)}</div>
        <div className="smaller">{order.orderQty} Item{order.orderQty > 1 ? 's' : ''}</div>
      </div>
    </div>
  );
}
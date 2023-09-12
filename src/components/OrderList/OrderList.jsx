import OrderListShoe from '../OrderListShoe/OrderListShoe';
import './OrderList.css';

export default function OrderList({ orders, selectedOrder, setSelectedOrder }) {
  const orderListShoes = orders.map(o =>
    <OrderListShoe
      order={o}
      isSelected={o === selectedOrder}
      setSelectedOrder={setSelectedOrder}
      key={o._id}
    />
  );
  return (
    <main className="OrderList">
      {orderListShoes}
    </main>
  );
}
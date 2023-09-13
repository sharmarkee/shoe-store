import './OrderList.css';
import OrderListShoe from '../OrderListShoe/OrderListShoe';

export default function OrderList({ orders, activeOrder, setActiveOrder }) {

  const orderList = orders.map(order => <OrderListShoe
    order={order}
    activeOrder={activeOrder}
    setActiveOrder={setActiveOrder}
    key={order.id}
  />);

  return (
    <main className={`OrderList ${orders.length ? '' : 'no-orders'}`}>
      {orderList}
    </main>
  );
}
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import LogOut from '../../components/LogOut/LogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';


export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setOrders(orders);
      setSelectedOrder(orders[0]);
    }
    getOrders();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <h1>Order History</h1>
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <LogOut user={user} setUser={setUser} />
      </aside>
      <OrderList
        orders={orders}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
      <OrderDetail order={selectedOrder} />
    </main>
  );
}
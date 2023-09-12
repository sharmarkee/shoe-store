import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
   const [user, setUser] = useState(getUser());

   return (
    <main className="App">
      { user ?
       <>
        <NavBar user={ user} setUser= { setUser }/>
        <Routes>
         <Route path="/order/new" element={<NewOrderPage />} />
         <Route path="/order" element={<OrderHistoryPage />} />
         <Route path="/*" element={<Navigate to="/order/new" />} />
        </Routes>
       </>
        :
        <AuthPage setUser= { setUser }/>
      }
    </main>
  );
}
 

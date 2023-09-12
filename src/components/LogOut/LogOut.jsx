import './LogOut.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="LogOut">
      <div>{user.name}</div>
      <div className="email">{user.email}</div>
      <button className="btn-m" onClick={() => handleLogOut()}>LOG OUT</button>
    </div>
  );
}
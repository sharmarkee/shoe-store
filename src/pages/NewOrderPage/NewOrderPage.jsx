import * as shoetemsAPI from '../../utilities/items-api';
// Add the following import
import * as ordersAPI from '../../utilities/orders-api';


const [cart, setCart] = useState(null);
export default function NewOrderPage() {
  return (
    <h1> NewOrderPage</h1>
  )
}

useEffect(function() {
  async function getItems() {
    const items = await itemsAPI.getAll();
    categoriesRef.current = [...new Set(items.map(item => item.category.name))];
    setMenuItems(items);
    setActiveCat(categoriesRef.current[0]);
  }
  getItems();

  // Load cart (a cart is the unpaid order for the logged in user)
  async function getCart() {
    const cart = await ordersAPI.getCart();
    setCart(cart);
  }
  getCart();
});
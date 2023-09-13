import './InventoryList.css';
import InventoryListShoe from '../InventoryListShoe/InventoryListShoe';


export default function InventoryList({ inventoryShoes, handleAddToOrder }) {
  const shoes = inventoryShoes.map(shoe =>
    <InventoryListShoe
      key={shoe._id}
      inventoryShoe={shoe}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="InventoryList">
      {shoes}
    </main>
  );
}
import './InventoryList.css';
import InventoryListItem from '../InventoryListItem/InventoryListItem';

export default function InventoryList({ inventoryItems, handleAddToOrder }) {
  const shoes = inventoryItems.map(shoes =>
    <InventoryListItem
      key={shoe._id}
      inventoryItem={shoes}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="InventoryList">
      {shoes}
    </main>
  );
}
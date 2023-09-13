import './InventoryList.css';
import InventoryListShoes from '../InventoryListShoes/InventoryListShoes';


export default function InventoryList({ inventoryShoes, handleAddToOrder }) {
  const shoes = inventoryShoes.map(shoe =>
    <InventoryListShoes
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
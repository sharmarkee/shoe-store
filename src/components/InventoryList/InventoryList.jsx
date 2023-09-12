import './InventoryList.css';


export default function InventoryList({ inventoryShoes, handleAddToOrder }) {
  const shoes = inventoryShoes.map(shoes =>
    <InventoryList
      key={shoes._id}
      inventoryShoes={shoes}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="InventoryList">
      {shoes}
    </main>
  );
}
import './InventoryListShoes.css';

export default function InventoryListShoes({ inventoryShoe, handleAddToOrder }) {
  return (
    <div className="InventoryListShoes">
      <div className="name">{inventoryShoe.name}</div>
      <div className="buy">
        <span>${inventoryShoe.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(inventoryShoe._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}
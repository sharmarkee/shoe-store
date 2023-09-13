import './InventoryListShoes.css';

export default function InventoryListShoes({ inventoryShoe, handleAddToOrder }) {
  return (
    <div className="InventoryListShoes">
        <div className="image flex-ctr-ctr">{menuItem.image}</div>
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${inventoryShoe.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(inventoryShoe._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}
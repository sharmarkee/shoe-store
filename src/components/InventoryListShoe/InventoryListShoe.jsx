import './InventoryListShoe.css';

export default function InventoryListShoe({ inventoryShoe, handleAddToOrder }) {
  return (
    <div className="InventoryListShoe">
        
          <img className="image flex-ctr-ctr" src={inventoryShoe.image} alt={inventoryShoe.name} />
      
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
import './ShoeItem.css';

export default function LineItem({ shoeItem, isPaid, handleChangeQty }) {
  return (
    <div className="ShoeItem">
      <img className="flex-ctr-ctr" src={shoeItem.image} />
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{shoeItem.item.name}</span>
        <span>{shoeItem.item.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-m"
            onClick={() => handleChangeQty(shoeItem.item._id, shoeItem.qty - 1)}
          >−</button>
        }
        <span>{shoeItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-m"
            onClick={() => handleChangeQty(shoeItem.item._id, shoeItem.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${shoeItem.extPrice.toFixed(2)}</div>
    </div>
  );
}
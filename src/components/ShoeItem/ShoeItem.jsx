import './ShoeItem.css';

export default function ShoeItem({ shoeItem, isPaid, handleChangeQty }) {
  return (
    <div className="ShoeItem">
      <div className=" flex-ctr-ctr flex-col" >
      <img className="image" src={shoeItem.shoe.image} alt={shoeItem.shoe.name} />
        <span className="align-ctr">{shoeItem.shoe.name}</span>
        <span>{shoeItem.shoe.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-sm"
            onClick={() => handleChangeQty(shoeItem.shoe._id, shoeItem.qty - 1)}
          >−</button>
        }
        <span>{shoeItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-sm"
            onClick={() => handleChangeQty(shoeItem.shoe._id, shoeItem.qty + 1)}
          >+</button>
        }
      </div>
      <div className="ext-price">${shoeItem.extPrice.toFixed(2)}</div>
    </div>
  );
}
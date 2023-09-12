import './BrandList.css';

export default function BrandList({ brands, activeCat, setActiveCat }) {
  const cats = brands.map(cat =>
    <li
      key={cat}
      className={cat === activeCat ? 'active' : ''}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  );
  return (
    <ul className="BrandList">
      {cats}
    </ul>
  );
}
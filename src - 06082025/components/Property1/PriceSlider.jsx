export default function PriceSlider({ min, max, value, onChange }) {
  return (
    <div>
      <label>Price: ₹{value[0]} - ₹{value[1]}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value[0]}
        onChange={(e) => onChange([+e.target.value, value[1]])}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value[1]}
        onChange={(e) => onChange([value[0], +e.target.value])}
      />
    </div>
  );
}

export default function Item({ item, onXClick, onCheckBox }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckBox(item.id)}
      />
      <span style={item.packed ? { textDecoration: `line-through` } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onXClick(item.id)}>❌</button>
    </li>
  );
}

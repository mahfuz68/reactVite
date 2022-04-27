export default function HoverCounter({ count, incrementCount }) {
  return (
    <p className="mt-4 " type="button" onFocus={incrementCount} onMouseOver={incrementCount}>
      Hovered
      {' '}
      {count}
      {' '}
      time
    </p>
  );
}

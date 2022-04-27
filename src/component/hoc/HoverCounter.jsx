import WithCounter from './WithCounter';

function HoverCounter({ count, incrementCount }) {
  return (
    <button className="mt-4" type="button" onFocus={incrementCount} onMouseOver={incrementCount}>
      Hovered
      {' '}
      {count}
      {' '}
      time
    </button>
  );
}

export default WithCounter(HoverCounter);

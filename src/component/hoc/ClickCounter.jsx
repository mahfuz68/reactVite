import HoverCounter from './HoverCounter';
import WithCounter from './WithCounter';

function ClickCounter({ count, incrementCount }) {
    return (
        <>
            <button className="mt-4" type="button" onClick={incrementCount}>
                Clicked
                {' '}
                {count}
                {' '}
                time
            </button>
            <br />
            <HoverCounter />
        </>
    );
}

export default WithCounter(ClickCounter);

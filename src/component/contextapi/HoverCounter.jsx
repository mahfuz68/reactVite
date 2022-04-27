export default function HoverCounter({
    count, incrementCount, theme, switchTheme
}) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <p style={style} type="button" onFocus={incrementCount} onMouseOver={incrementCount}>
                Hovered
                {' '}
                {count}
                {' '}
                time
            </p>
            <button type="button" onClick={switchTheme}>
                Click Here
            </button>
        </div>
    );
}

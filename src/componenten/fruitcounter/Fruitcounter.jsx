import './Fruitcounter.css'

// eslint-disable-next-line react/prop-types
function Fruitcounter({ title, counter, increase, decrease }) {
    return (
        <section>
            <h2>{title}</h2>
            <button type="button" onClick={decrease}>-</button>
            <p>{counter}</p>
            <button type="button" onClick={increase}>+</button>
        </section>
    );
}

export default Fruitcounter;
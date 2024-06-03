import './Fruitcounter.css'

// eslint-disable-next-line react/prop-types
function Fruitcounter({ img,title, counter, increase, decrease }) {
    return (
        <article >
            <span>
            <img src={img} alt={title} />
                </span>
            <h2>{title}</h2>
            <button type="button" onClick={decrease}>-</button>
            <p>{counter}</p>
            <button type="button" onClick={increase}>+</button>
        </article>
    );
}

export default Fruitcounter;
import './OrderForm.css'

// eslint-disable-next-line react/prop-types
function OrderForm({ onSubmit }) {
    return (
        <div className="form-container">
            <form onSubmit={onSubmit} >
                <label htmlFor="voornaam">
                    Voornaam
                    <input type="text" id="voornaam" name="voornaam" />
                </label>
                <label htmlFor="achternaam">
                    Achternaam
                    <input type="text" id="achternaam" name="achternaam" />
                </label>
                <label htmlFor="leeftijd">
                    Leeftijd
                    <input type="number" id="leeftijd" name="leeftijd" min="18" max="120" />
                </label>
                <label htmlFor="postcode">
                    Postcode
                    <input type="text" id="postcode" name="postcode" maxLength={6} />
                </label>
                <label htmlFor="bezorgfrequentie">
                    Bezorgfrequentie
                    <select name="bezorgfrequentie" id="bezorgfrequentie">
                        <option value="dagelijks">Dagelijks</option>
                        <option value="wekelijks">Iedere week</option>
                        <option value="maandelijks">Iedere maand</option>
                    </select>
                </label>
                <div>
                    <label htmlFor="overdag ">
                        <input type="radio" id="overdag" name="tijd" value="overdag" /> Overdag
                    </label>
                    <label htmlFor="avond">
                        <input type="radio" id="avond" name="tijd" value="avond" /> Avond
                    </label>
                </div>
                <label htmlFor="opmerkingen">
                    <p>Opmerkingen</p>
                    <textarea id="opmerkingen" name="opmerkingen" cols="30" rows="10"></textarea>
                </label>
                <label htmlFor="userTerms">
                    <input type="checkbox" id="userTerms" name="userTerms" value="agreedToUserTerms" /> Ik ga akkoord met de voorwaarden
                </label>
                <button type="submit">Verzend</button>
            </form>
        </div>
    );
}

export default OrderForm;
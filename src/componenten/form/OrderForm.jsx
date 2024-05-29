

// eslint-disable-next-line react/prop-types
function OrderForm({ onSubmit }) {

    return (


        <form onSubmit={onSubmit}>

            Voornaam <input type="text"/>
            Achternaam <input type="text"/>
            Leeftijd <input type="number" min="18" max="120"/>
            Postcode <input type="text" maxLength={6}/>

            Bezorgfrequentie
            <select name="bezorgfrequentie" id="bezorgfrequentie">
                <option value="dagelijks">Dagelijks</option>
                <option value="wekelijks">Iedere week</option>
                <option value="maandelijks">Iedere maand</option>
            </select>

            <input type="radio" name="overdag" value="overdag"/> Overdag
            <input type="radio" name="avond" value="avond"/> Avond

            Opmerkingen
            <textarea name="opmerkingen" id="" cols="30" rows="10"></textarea>

            <input type="checkbox" name="userTerms" value="agreedToUserTerms"/> Ik ga akkoord met
            de voorwaarden
            <button type="submit">Verzend</button>
        </form>
    )

}

export default OrderForm;
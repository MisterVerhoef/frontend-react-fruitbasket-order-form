import {useState} from "react";
import './App.css'
import Fruitcounter from "./componenten/fruitcounter/Fruitcounter.jsx";


function App() {

    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);

    const decreaseBanana = () => {
        if (bananaCounter > 0) setBananaCounter(bananaCounter - 1);
    };
    const increaseBanana = () => setBananaCounter(bananaCounter + 1);

    const decreaseKiwi = () => {
        if (kiwiCounter > 0) setKiwiCounter(kiwiCounter - 1);
    };
    const increaseKiwi = () => setKiwiCounter(kiwiCounter + 1);

    const decreaseApple = () => {
        if (appleCounter > 0) setAppleCounter(appleCounter - 1);
    };
    const increaseApple = () => setAppleCounter(appleCounter + 1);

    const decreaseStrawberry = () => {
        if (strawberryCounter > 0) setStrawberryCounter(strawberryCounter - 1);
    };
    const increaseStrawberry = () => setStrawberryCounter(strawberryCounter + 1);

    const fruitReset = () => {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setKiwiCounter(0);
        setAppleCounter(0);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());
        formValues.strawberryCount = strawberryCounter;
        formValues.bananaCount = bananaCounter;
        formValues.kiwiCount = kiwiCounter;
        formValues.appleCount = appleCounter;
        console.log(formValues);
    };

    console.log(strawberryCounter)
    return (
        <>
            <header>
                <h1>Fruitmand bezorgservice</h1>
            </header>
            <main>
           <Fruitcounter
               title="Aardbeien"
               counter={strawberryCounter}
               increase={increaseStrawberry}
               decrease={decreaseStrawberry}
           />

                <Fruitcounter
                    title="Appelen"
                    counter={appleCounter}
                    increase={increaseApple}
                    decrease={decreaseApple}
                />

                <Fruitcounter
                    title="Bananen"
                    counter={bananaCounter}
                    increase={increaseBanana}
                    decrease={decreaseBanana}
                />

                <Fruitcounter
                    title="Kiwi"
                    counter={kiwiCounter}
                    increase={increaseKiwi}
                    decrease={decreaseKiwi}
                    />

                <button onClick={fruitReset}>Reset</button>

                <form onSubmit={handleSubmit}>

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

            </main>
        </>
    )
}

export default App

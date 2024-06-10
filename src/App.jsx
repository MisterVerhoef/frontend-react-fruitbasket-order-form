import {useState} from "react";
import './App.css';
import Fruitcounter from "./componenten/fruitcounter/Fruitcounter.jsx";
import OrderForm from "./componenten/form/OrderForm.jsx";
import companyLogo from "./assets/screenshot-logo.png";
import HeaderFormat from "./componenten/headerFormat/HeaderFormat.jsx";
import strawberry from "./assets/strawberry-image.png";
import banana from "./assets/banana-image.png";
import kiwi from "./assets/kiwi-image.png";
import apple from "./assets/apple-image.png";

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
           <HeaderFormat
           companyLogo={companyLogo}
           />
            <main>
           <Fruitcounter
               img={strawberry}
               title="Aardbeien"
               counter={strawberryCounter}
               increase={increaseStrawberry}
               decrease={decreaseStrawberry}
           />

                <Fruitcounter
                    title="Appelen"
                    img={apple}
                    counter={appleCounter}
                    increase={increaseApple}
                    decrease={decreaseApple}
                />

                <Fruitcounter
                    title="Bananen"
                    img={banana}
                    counter={bananaCounter}
                    increase={increaseBanana}
                    decrease={decreaseBanana}
                />

                <Fruitcounter
                    title="Kiwi"
                    img={kiwi}
                    counter={kiwiCounter}
                    increase={increaseKiwi}
                    decrease={decreaseKiwi}
                    />

                <button  id="counter-reset-button" onClick={fruitReset}>Reset</button>



            </main>
            <footer>
                <OrderForm
                    onSubmit={handleSubmit}
                />
            </footer>
        </>
    )
}

export default App

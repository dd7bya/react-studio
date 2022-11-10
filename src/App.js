import "./App.css";
import "./bootstrap.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cart from "./components/Cart";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  /* const [clickedI, setClickedI] = useState({name: '', price: '', key: ''}); //item field is [name, price] */
  const[cartData, setCart] = useState([]);

  const handleClick = (props) => {
      setCart([...cartData, {name: props.name, price: props.price, key: Date.now()}]);
  }


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="SectionsFlex">
        <div className="BakeryItems">
          {bakeryData.map((item) => { // TODO: map bakeryData to BakeryItem components
            return (<BakeryItem name={item.name} image={item.image} price={item.price} description={item.description} handleClick={handleClick} />);
          })}
        </div>

        <div>
          
          <Cart cartData={cartData} />{/* TODO: render a list of items in the cart */}
        </div>
      </div>
    </div>
  );
}

export default App;

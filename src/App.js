import BirdCards from "./Components/BirdCards";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <BirdCards birdData={birdData} cart={cart} setCart={setCart} />
      <Cart
        birdData={birdData}
        cart={cart}
        setCart={setCart}
        bonusItems={bonusItems}
      />
      <Checkout />
    </div>
  );
};

export default App;

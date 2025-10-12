import ShopHub from "./components/app/ShopHub";
import CartProvider from "./store/CartContextProvider";

function App() {
  return (
    <CartProvider>
      <ShopHub />
    </CartProvider>
  );
}

export default App;

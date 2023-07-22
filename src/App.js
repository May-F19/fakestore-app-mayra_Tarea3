import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartContextProvider } from "./provider/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <nav className="w-full h-16 bg-black text-white flex justify-between items-center px-4">
          <Link to="/">
            <h1 className="font-bold text-xl">FakeStore</h1>
          </Link>
          <Link to="/cart">Carrito</Link>
        </nav>
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

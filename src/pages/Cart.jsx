import { useCartContext } from "../provider/CartProvider";

const Cart = () => {
  const {
    state: { cart },
  } = useCartContext();

  return (
    <section className="w-full min-h-[800px] flex justify-center">
      <div className="container flex flex-col items-center p-4">
        <h1 className="font-bold text-3xl">Carrito de compra</h1>
        <div className="flex flex-wrap gap-4">
          {cart.map((product) => (
            <div className="flex flex-col gap-2 rounded-xl bg-white p-4 w-44 items-center">
              <img
                src={product.image}
                className="w-24 h-24 object-cover"
                alt={product.title}
              />
              <h1>{product.title}</h1>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
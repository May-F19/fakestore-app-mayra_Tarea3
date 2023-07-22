import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { getProducts } = useAPI();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <section className="w-full min-h-[800px] flex justify-center">
      <div className="container flex flex-col items-center p-4">
        <h1 className="font-bold text-3xl">Bienvenido a Fake Store</h1>
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
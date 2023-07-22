import useCounter from "../hooks/useCounter";

const CounterComponent = () => {
  const { counter, increment, decrement } = useCounter(10);

  return (
    <div className="flex-1 w-full flex flex-col gap-4 px-4">
      <h1 className="text-5xl text-purple-800">{counter}</h1>
      <div className="flex gap-4">
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>
    </div>
  );
};

export default CounterComponent;
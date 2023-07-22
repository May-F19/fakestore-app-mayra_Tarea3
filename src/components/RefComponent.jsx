import { useRef, useEffect } from "react";

const RefComponent = () => {
  const iRef = useRef();

  const focus = () => {
    console.log(iRef);
    iRef.current.focus();
  };

  const clear = () => {
    iRef.current.value = "";
  };

  const print = () => {
    alert(iRef.current.value);
  };

  return (
    <div className="bg-gray-200 flex-1 w-full">
      <div className="flex gap-4">
        <input type="text" id="input-test" ref={iRef} />
        <button onClick={focus}>Focus</button>
        <button onClick={clear}>Limpiar</button>
        <button onClick={print}>Imprimir</button>
      </div>
    </div>
  );
};

export default RefComponent;
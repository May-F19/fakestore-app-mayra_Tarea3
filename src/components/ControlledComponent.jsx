import { useState } from "react";

const ControlledComponent = () => {
  
  const [inputValue,setInputValue] = useState("");
  const [error,setError] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const print = () => {
    alert(inputValue);
  };

  const clear = () =>{
    setInputValue("");
  };

  const Validate =() => {
    if (inputValue.length >10){
      setError("El valor debe de tener menos de 10 caracteres");
    }else{
      alert("El valor es correcto: "+ inputValue);
      setError("");
    }
  };

  return (
    <div className="bg-gray-200 flex-1 w-full">
      <div className="flex gap-4">
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        <button onClick={print}>Imprimir</button>
        <button onClick={clear}>Limpiar</button>
        <button onClick={Validate}>Validar</button>
        <div>
          {!!error && <span className="text-red-500 text-sm">{error}</span>}
          <div className="flex gap-4">El valor del input es: {inputValue}</div>
        </div>
      </div>
    </div>
  );
};

export default ControlledComponent;
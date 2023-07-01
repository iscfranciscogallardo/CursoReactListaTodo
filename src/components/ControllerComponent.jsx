import { useState } from "react";

const ControllerComponent = ()=>{

    const [inputValue, setInputValue] = useState('');

    const [error, setError] = useState('');

    const handlerInputChange=(event)=>{
        setInputValue(event.target.value);
    };

    const print=()=>{
        alert(inputValue);
    };

    const validateLength=()=>{
        if(inputValue.length>10){
            setError('El valor es mayor a 10 caracteres');
        }
        else{
            setError('');
            alert('valor correct');
        }
    };

    const clear=()=>{
        setInputValue('');
    };

    return (
        <div className="bg-slate-700 w-screen h-screen">
            <input type="text" id="input-test" value={inputValue} onChange={handlerInputChange}></input>
            <button onClick={print}>Imprimir</button>
            <button onClick={clear}>Limpiar</button>
            <button onClick={validateLength}>Validar</button>
            <div>
                el valor del input es: {inputValue}
            </div>
           {!!error && <span className="bg-red-600 font-thin">{error}</span>}
        </div>
    );

};

export default ControllerComponent;
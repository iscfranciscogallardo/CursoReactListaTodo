import { useRef } from "react";

const RefComponent =()=>{

    const inputRef = useRef()

    const focus=()=>{
        console.log(inputRef); // solo es para ver en cosola todo lo que tiene inputRef, para codigo como tal no sirve
        inputRef.current.focus();
    };

    const clear=()=>{
        inputRef.current.value = '';
    };

    const print=()=>{
        alert(inputRef.current.value);
    };

    return (
        <div className="bg-slate-700 w-screen h-screen">
            <input type="text" id="input-test" ref={inputRef}></input>
            <button onClick={focus}>Foco</button>
            <button onClick={clear}>Limpiar</button>
            <button onClick={print}>Imprimir</button>
        </div>
    );
};

export default RefComponent;
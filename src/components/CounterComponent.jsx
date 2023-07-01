import { useEffect } from 'react';
import useCounter from '../hooks/useCounter';

const CounterComponent = () =>{

    const {counter, increment, decrement} = useCounter(
        Number(localStorage.getItem("counter") ?? 0)
    );

    useEffect(()=>{
        localStorage.setItem("counter", counter);        
    }, [counter]);

    return (
        <div className="bg-yellow-300 w-screen h-screen">
            <h1 className="text-5xl">Counter Component: {counter}</h1>
            <div className="bg-yellow-300 w-screen h-screen">
                <button onClick={increment}>Incrementar</button>
                <button onClick={decrement}>Decrementar</button>
            </div>
        </div>
    );

}

export default CounterComponent;
import { useReducer } from "react";

const ReducerComponent = () => {

    const [sum, increment] = useReducer((val, type) => {
        switch(type){
            case 'byOne':
                return val + 1;
            case 'byTwo':
                return val + 2;
            default:
                return val;
        }
    }, 0);

    return (
        <div className="w-screen h-screen bg-stone-600">
            <span className="text-xl">{sum}</span>
            <button className="m-5 p-2 bg-green-500 text-white" onClick={()=>increment('byOne')}>Aumentar + 1</button>
            <button className="m-5 p-2 bg-green-500 text-white" onClick={()=>increment('byTwo')}>Aumentar + 2</button>
        </div>
    );

};

export default ReducerComponent;
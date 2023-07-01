import { useEffect, useState } from "react";
import useApi from "../hooks/useApi";

const ProductsComponent = () => {
    const [products, setProducts] = useState([]);
    const { getProducts } = useApi();

    useEffect(()=>{
    //    getProducts().then((data)=>setProducts(data));
    }, []);

    
    useEffect(()=>{
        const asyncProductsList = async() => {
            setProducts(await getProducts());
        }
        asyncProductsList();
    }, []);

    return (
        <div className="w-screen h-screen bg-white ">
            <h1>Products</h1>
            <ul className="h-56 grid grid-cols-5 gap-4 content-start ...">
                {products.map((product)=>(
                    <li className="rounded-sm bg-white hover:bg-slate-600" key={product.id}>
                        <span>Product:{product.title}</span><br/>
                        <span>Price:{product.price}</span>
                        <img src={product.image} className="w-3/6"></img>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsComponent;

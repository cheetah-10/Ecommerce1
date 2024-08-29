import React, { useState, useEffect } from "react";
import style from './Categories.module.css'
import axios from 'axios'
// import CategoriesProducts from "../CategoriesProducts/CategoriesProducts";
import { Link } from "react-router-dom";
export default function Categories() {
    
    const [subProducts, setSubProducts] = useState([])

    

    const [products, setProducts] = useState([])
    async function displayCategories() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        console.log(data.data);
        setProducts(data.data)
    }

    useEffect(() => {
        displayCategories();
    }, [])

    return (<>
        <div className="row lg:w-5/6 md:w-3/4 m-auto flex-wrap lg:flex mt-9">
           
            {products.length > 0 ? products.map((product) =>
             <div key='menna' className="parent  lg:w-1/3 md:w-full p-4 cursor-pointer">
                <Link to={`/categories`}>
                <div className="product ">
                    <img className=" h-80 w-full object-cover text-center m-auto" src={product.image} alt="Category Name" />
                    <h2 className={`text-center text-green-700 p-3 ${style.categoryName}`}>{product.name}</h2>

                </div>
                </Link>
                
             </div>
               
            ) : <div className="loaderContainer"><div className="loader"></div></div>}
        </div>


    </>

    )
}


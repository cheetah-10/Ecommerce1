import React, { useState , useEffect} from "react";
import style from './Products.module.css'
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
export default function Products() {


    const [count,setCount]=useState()

    useEffect( ()=>{} ,[])

    return ( 
        <div><FeaturedProduct></FeaturedProduct></div>
     )
}


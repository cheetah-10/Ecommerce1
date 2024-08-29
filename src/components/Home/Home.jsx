import React, { useState, useEffect } from "react";
import style from './Home.module.css'
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import CategorySlider from "../CatigorySlider";

export default function Home() {

   const [count, setCount] = useState()

   useEffect(() => { }, [])

   return (
      <>
         <FeaturedProduct></FeaturedProduct>
         <div >Home </div>
      </>

   )
}


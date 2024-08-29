import React, { useState , useEffect} from "react";
import style from './Item.module.css'

export default function Item(ele) {


    // const [count,setCount]=useState()

    // useEffect( ()=>{} ,[])

    return ( 
     <div className="lg:w-1/6 md:w-1/3 sm:w-1/2">
            <div className="product p-2 cursor-pointer">
                <img src={ele?.imageCover} className="w-full" alt="" />
                <p className="text-green-700">{ele?.category?.name}</p>
                <p className="">{ele?.title}</p>
                <div className="flex justify-between my-3">
                    <p>{ele?.price} EGP</p>
                    <p><i className="fas fa-star text-yellow-400"></i>{ele?.ratingsAverage} </p>
                </div>
                <button className="btn bg-green-700 text-white p-2 rounded">+ Add</button>
            </div>
        </div>
    
       
    )
}


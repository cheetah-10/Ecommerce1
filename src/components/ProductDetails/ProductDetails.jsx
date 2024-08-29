import React, { useState, useEffect } from "react";
import style from './ProductDetails.module.css'
import axios from "axios";
import { getSpecificProduct } from "../../APIs/getSpecificProduct";
import { useParams } from "react-router-dom"
import { motion } from 'framer-motion'
import { addToCartApi } from "../../APIs/cartApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function ProductDetails() {
    let { id } = useParams()

    let [imgSrc, setimgSrc] = useState('')
    let [details, setdetails] = useState([])
    let [msg, setmsg] = useState('')
    let [loading, setloading] = useState(false)

    async function getSpecificProductApi() {
        setloading(true)
        let data = await getSpecificProduct(id)

        console.log(data);


        if (data?.data) {
            setdetails(data.data)
            setmsg('')
            setloading(false)
        }
        else {
            setmsg(data)
            setloading(false)
        }

    }
    function changeSrc(e) {
        setimgSrc(e.target.src)
    }





    useEffect(() => {
        getSpecificProductApi()
    }, [])
    let { status, mutate, data } = useMutation({ mutationFn: addToCartApi })
    if (status == 'success') {

        toast.success(data?.data.message);
        console.log('added');

    } else if (status == 'error') {
        console.log('errror');
        console.log(data?.data.message);
    }



    if (loading) {
        return <div className="loaderContainer"><div className="loader"></div></div>
    }
    if (msg) {
        return <h2 className="text-red-700 my-3 font-bold">{msg}</h2>
    }
    else {
        return (
            <div className={`row m-auto w-5/6 items-center flex lg:flex-row md:flex-col py-5 `}>
                <div className="lg:w-1/3 md:w-full">
                    <img className="w-full" src={imgSrc ? imgSrc : details?.imageCover} alt="" />
                    <ul className="flex tex-center gap-1 justify-between">
                        {details?.images?.map((img) => <li className="text-center" key={img}><motion.img whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} onClick={changeSrc} className="cursor-pointer mt-1 w-80" src={img} alt="" /></li>)}
                    </ul>
                </div>
                <div className="lg:w-2/3 md:w-full lg:p-5">
                    <p className="text-green-700">{details?.category?.name}</p>
                    <p className="">{details?.title}</p>
                    <p className="">{details?.description}</p>
                    <div className="flex justify-between my-3">
                        <p>{details?.price} EGP</p>
                        <p><i className="fas fa-star text-yellow-400"></i>{details?.ratingsAverage} </p>
                    </div>
                    <div className="flex">
                    <button onClick={() => { mutate(details?._id) }} className="btn bg-green-500 w-full text-white p-2 rounded">+ Add</button>
                    <i
                        className={`fa-solid text-2xl px-5 fa-heart`}></i>
                    </div>
                 
                </div>
            </div>
        )
    }
}


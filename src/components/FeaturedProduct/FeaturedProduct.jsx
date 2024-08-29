import React, { useState, useEffect } from "react";
import style from './FeaturedProduct.module.css';
import { getProducts } from "../../APIs/getProducts";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { addToCartApi } from "../../APIs/cartApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function FeaturedProduct() {
    let [productArr, setproductArr] = useState([]);
    let [loading, setloading] = useState(false);
    let [msg, setmsg] = useState('');
    let [activeHearts, setActiveHearts] = useState({}); // To track which products have the heart active

    async function getProductsApi() {
        setloading(true);
        let data = await getProducts();

        if (data?.data) {
            setproductArr(data?.data);
            setmsg('');
            setloading(false);
        } else {
            setmsg(data);
            setloading(false);
        }
    }

    useEffect(() => {
        getProductsApi();
    }, []);

    let { status, mutate, data } = useMutation({ mutationFn: addToCartApi });
    
    if (status === 'success') {
        toast.success(data?.data.message);
        console.log('added');
    } else if (status === 'error') {
        console.log('error');
        console.log(data?.data.message);
    }

    const toggleHeart = (id) => {
        setActiveHearts(prevState => ({
            ...prevState,
            [id]: !prevState[id] // Toggle the active state for the specific product
        }));
    };

    if (loading) {
        return <div className="loaderContainer"><div className="loader"></div></div>;
    }
    if (msg) {
        return <h2 className="text-red-700 my-3 font-bold">{msg}</h2>;
    } else {
        return (
            <>
                <div className="row w-5/6 m-auto">
                    {productArr.map((element) => (
                        <div key={element._id} className="lg:w-1/4 md:w-1/2">
                            <div className="product rounded m-2 p-2 cursor-pointer">
                                <Link to={`/productDetails/${element?._id}`}>
                                    <img src={element?.imageCover} className="w-full" alt="" />
                                    <p className="text-green-700">{element?.category?.name}</p>
                                    <p className="line-clamp-1">{element?.title}</p>
                                    <div className="flex justify-between my-3">
                                        <p>{element?.price} EGP</p>
                                        <p><i className="fas fa-star text-yellow-400"></i>{element?.ratingsAverage} </p>
                                    </div>
                                </Link>
                                <div className="flex justify-between">
                                    <button onClick={() => { mutate(element?._id); }} className="btn bg-green-700 w-full text-white p-2 rounded">+ Add</button>
                                    <i 
                                        onClick={() => toggleHeart(element?._id)} 
                                        className={`fa-solid text-2xl px-5 fa-heart ${activeHearts[element._id] ? 'text-red-500' : 'text-gray-500'}`}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

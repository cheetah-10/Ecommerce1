import React, { useState, useEffect } from "react";
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from "react-router-dom";

export default function Layout() {


    const [count, setCount] = useState()

    useEffect(() => { }, [])

    return (
        <>
            <div>
                <Navbar/>
                <div className="container mx-auto my-6 py-10">
                    <Outlet></Outlet>
                </div>
                <Footer/>
            </div>


        </>

    )
}


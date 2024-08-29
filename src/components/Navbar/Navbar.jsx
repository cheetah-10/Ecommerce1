import React, { useState, useEffect, useContext } from "react";
import style from './Navbar.module.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CounterContext } from '../../Context/counterContext'
import CounterContextProvider from '../../Context/counterContext'
import { UserContext } from "../../Context/UserContext";

export default function Navbar() {
    let [open, setOpen] = useState(false)
    function toggleNav() {
        setOpen(!open)
    }
    let navigate = useNavigate()
    const [count, setCount] = useState()

    useEffect(() => { }, [])
    let { counter, userNAme } = useContext(CounterContext)

    function logout() {
        localStorage.removeItem('userToken')
        setuserLogin(null)
        navigate('/login')
    }


    let { userLogin, setuserLogin } = useContext(UserContext)
    return (
        <nav className="bg-gray-100 py-2 static lg:fixed top-0 right-0 left-0">
            <div className=" px-10 mx-auto py-2 justify-between flex flex-col lg:flex-row relative">
                <div className="flex flex-col lg:flex-row">
                    <div className={`${style.logo} flex py-2`}>
                        <i className={`fa-solid fa-cart-shopping ${style.logoIcon}`}></i>
                        <h2>fresh cart</h2>
                    </div>


                    <ul className={`flex flex-col lg:flex-row ${open ? `block` : `hidden`}`}>
                        {userLogin !== null ? <>
                            <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to="">Home</NavLink></li>
                            <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to="cart">Cart</NavLink></li>
                            <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to="wishList">Wish List</NavLink></li>
                            <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to="products">Products</NavLink></li>
                            <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to="categories">Categories</NavLink></li>
                            <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to="Brands">Brands</NavLink></li>
                        </> : null}

                    </ul>
                </div>


                <div>
                    <ul className={`flex flex-col lg:flex-row ${open ? `block` : `hidden`}`}>
                        {userLogin === null ? <>
                            <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to="login">Login</NavLink></li>
                            <li className="py-2"><NavLink className="mx-2 text-lg text-slate-900 font-light" to="register">Register</NavLink></li>
                        </> : <li onClick={logout} className="py-2"><Link className="mx-2 text-lg text-slate-900 font-light">Logout {userLogin ? <b className="text-green-700 font-bold">Hi {userLogin.name}</b> : ''}</Link></li>
                        }

                        <li className="py-2 flex items-center">
                            <i className="fab fa-facebook mx-2"></i>
                            <i className="fab fa-instagram mx-2"></i>
                            <i className="fab fa-twitter mx-2"></i>
                            <i className="fab fa-youtube mx-2"></i>
                            <i className="fab fa-tiktok mx-2"></i>
                        </li>
                        <li className="p-4 bg-lime-200">{counter}</li>

                    </ul>
                </div>
                <i onClick={toggleNav} className={`lg:hidden fas ${open ? 'fa-close' : 'fa-bars'} fa-2x absolute top-2 right-5 cursor-pointer`}></i>
            </div>
        </nav>
    )
}


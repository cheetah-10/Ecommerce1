import React, { useState, useEffect, useContext } from "react";
import style from './Forget.module.css'
import { useFormik } from 'formik';
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import * as Yup from 'yup'
import { UserContext } from "../../Context/UserContext";
import { jwtDecode } from "jwt-decode";


export default function Forget() {
    const [apiError, setApiError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    let validationSchema = Yup.object().shape({
        email: Yup.string().email('email is invalid').required('email is required'),
    })

    let navigate = useNavigate();


    async function handleForget(formValues) {
        try {
            setIsLoading(true)
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, formValues)
            console.log(data);
            
            if(data.statusMsg === 'success'){
                navigate('/reset')
            }
            setIsLoading(false)
        } 
        catch (error) {
            setIsLoading(false)
            setApiError(error?.data?.message)
        }
            

    }






    let formik = useFormik({
        initialValues: {

            email: '',
        

        },
        validationSchema: validationSchema,
        onSubmit: handleForget


    });



    useEffect(() => { }, [])

    return (
        <>
            <div className={`py-6 mx-auto mt-9 lg:w-5/6 ${style.centerY}`}>

                {apiError ? <div class="p-4 mb-4 text-sm text-red-600 border-rose-800 rounded-lg bg-red-50" role="alert">
                    {apiError}
                </div> : null}
                <h2 className="text-3xl font-bold text-green-600 mb-5 pt-6">Forget Password</h2>


                <form onSubmit={formik.handleSubmit} className="">


                    <div className="relative z-0 w-full mb-5 group">
                        <input id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email :</label>
                    </div>
                    {formik.errors.email && formik.touched.email ? <div class="p-4 mb-4 text-sm text-red-600 border-rose-800 rounded-lg bg-red-50" role="alert">
                        {formik.errors.email}
                    </div> : null}



                    <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-auto">
                        {isLoading ? <i className="fas fa-spinner fa-spin"></i> : `submit`}

                    </button>
                </form>
            </div>

        </>
    )
}


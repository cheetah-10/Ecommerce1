import React, { useState } from "react";
import style from './Payment.module.css';

export default function Payment() {
    const [details, setDetails] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [errors, setErrors] = useState({
        details: "",
        phone: "",
        city: ""
    });
    const [touched, setTouched] = useState({
        details: false,
        phone: false,
        city: false
    });

    const validateDetails = (value) => {
        if (value === "") {
            return "Details are required";
        } else if (value.length < 3) {
            return "Details must be at least 3 characters long";
        }
        return "";
    };

    const validatePhone = (value) => {
        const egyptianPhoneRegex = /^(010|011|012|015)\d{8}$/;
        if (value === "") {
            return "Phone is required";
        } else if (!egyptianPhoneRegex.test(value)) {
            return "Phone number is not valid. Must be an Egyptian number.";
        }
        return "";
    };

    const validateCity = (value) => {
        if (value === "") {
            return "City is required";
        } else if (value.length < 3) {
            return "City must be at least 3 characters long";
        }
        return "";
    };

    const handleDetailsChange = (e) => {
        const value = e.target.value;
        setDetails(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            details: validateDetails(value)
        }));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            phone: validatePhone(value)
        }));
    };

    const handleCityChange = (e) => {
        const value = e.target.value;
        setCity(value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            city: validateCity(value)
        }));
    };

    const handleBlur = (field) => {
        setTouched((prevTouched) => ({
            ...prevTouched,
            [field]: true
        }));
    };

    const isFormValid = details && phone && city && !errors.details && !errors.phone && !errors.city;

    return (
        <div className="mx-auto w-5/6 mt-10">
            <div className="mb-6">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
                <input
                    type="text"
                    id="details"
                    value={details}
                    onChange={handleDetailsChange}
                    onBlur={() => handleBlur("details")}
                    className={`mt-1 block w-full p-2 border ${errors.details && touched.details ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.details && touched.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
            </div>

            <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur("phone")}
                    className={`mt-1 block w-full p-2 border ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.phone && touched.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="mb-6">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={handleCityChange}
                    onBlur={() => handleBlur("city")}
                    className={`mt-1 block w-full p-2 border ${errors.city && touched.city ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.city && touched.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
            </div>

            <button
                className={`block w-full ${isFormValid ? 'border-blue-500 border' : 'bg-gray-400'} text-blue-500 font-medium py-2 rounded-md transition duration-150`}
                disabled={!isFormValid}
            >
                Pay now
            </button>
        </div>
    );
}

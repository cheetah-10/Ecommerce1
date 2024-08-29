import React, { useEffect, useState } from 'react'
// import Slider from "react-slick";
import { getCategorySlider } from '../Apis/getCategories';

export default function CategorySlider() {


    let [msg, setMsg] = useState('')
    let [loading, setloading] = useState(false)
    let [categorySlider, setcategorySlider] = useState([])

    async function geCategorySliderApi() {
        setloading(true)
        let data = await getCategorySlider()


        if (data?.data) {
            setcategorySlider(data?.data)
            setMsg('')
            setloading(false)
        }

        else {
            setMsg(data?.message)
            setloading(false)
        }
    }

    useEffect(() => {
        geCategorySliderApi()
    }, [])




    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 5,
        autoplay:true,
        autoplaySpeed:1500
    };



    return (
        <>
            <Slider {...settings}>
               {categorySlider.map(ele=><img className='h-[150px] object-fit cursor-pointer' key={ele._id} src={ele?.image}></img>)}
            </Slider>
        </>
    )
}

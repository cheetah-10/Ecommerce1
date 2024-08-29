import React from 'react'

import mainImg from '../assets/finalProject assets/images/slider-image-1.jpeg'
import img1 from '../assets/finalProject assets/images/slider-image-2.jpeg'
import img2 from '../assets/finalProject assets/images/slider-image-3.jpeg'
import Slider from 'react-slick'

export default function MainSlider() {

    var setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false
    };

    return (
        <header className='my-5'>
            <div className="row-tw">
                <div className="w-2/3">
                    <Slider {...setting}>
                        <img src={mainImg} className='w-full h-[400px]' alt="" />
                        <img src={mainImg} className='w-full h-[400px]' alt="" />
                        <img src={mainImg} className='w-full h-[400px]' alt="" />
                    </Slider>
                </div>
                <div className="w-1/3">
                    <img src={img1} className='w-full h-[200px]' alt="" />
                    <img src={img2} className='w-full h-[200px]' alt="" />
                </div>
            </div>
        </header>
    )
}

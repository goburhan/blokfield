import Slider from 'react-slick'
import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../Style/slider-dots.css'

export default function Partners() {
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 250,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
    
            {
            breakpoint: 1140,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
    return (

       
            <div className="grid grid-cols-1 mt-20 ">
                <div className="text-5xl  text-white ">
                Partners
                
                </div>
                <div className='  mt-20 p-24 '>
                <Slider {...sliderSettings} >
                    
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner1.png" className="ml-auto "  width='150' alt="welcome" />
                </a>
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner2.png" className="ml-44 rounded-3xl  "  width='200' alt="welcome" />
                </a>
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner3.png" className="mr-50 rounded-3xl "  width='150' alt="welcome" />
                </a>
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner4.png" className=" rounded-3xl "  width='150' alt="welcome" />
                </a>
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner2.png" className=" rounded-3xl "  width='300' alt="welcome" />
                </a>

                </Slider>
                </div>

            </div>
    ); 
}
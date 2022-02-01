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
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
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

       
            <div className="grid grid-cols-1 mt-12">
              <section id='partners'>
                <div className="text-5xl mt-28 text-white ">
                Partners
                
                </div>
                <div className=' sm:ml-20 md:ml-0 mt-20 sm:p-0 lg:p-24 '>
                <Slider {...sliderSettings} >
                    
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner1.png" className="partnerbg sm:ml-0 lg:ml-28 "   alt="welcome" />
                </a>
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner2.png" className=" partnerbg sm:ml-0 lg:ml-28 "   alt="welcome" />
                </a>
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner3.png" className="  partnerbg sm:ml-0 lg:ml-28 "   alt="welcome" />
                </a>
                <a href='https://blokfield.gitbook.io/wisteria-swap/create-your-own-defi'>
                <img  src="/images/partner4.png" className="  partnerbg sm:ml-0  lg:ml-28 "   alt="welcome" />
                </a>
                

                </Slider>
                </div>
                </section>
            </div>
    ); 
}
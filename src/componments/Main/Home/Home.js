import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper';

function Home() {
  const homeSliderContainer = useRef(null);

  useEffect(() => {
    if (homeSliderContainer.current) {
      new Swiper(homeSliderContainer.current, {
        loop:true,
        effect: "coverflow",
        spaceBetween: 30,
        grabCursor: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
        },
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },
        autoplay: {
         delay: 1000, // 1 second
       },
      });
    }
  }, []);

  return (
    <section className="home" id="home">
      <div ref={homeSliderContainer} className="swiper home-slider">
         
      <div className="swiper-wrapper">

      <div className="box swiper-slide"style={{ transform: 'scale(1)' }}>
         <img src="images/home-img-1.jpg" alt=""/>
         <div className="flex">
            <h3>luxurious rooms</h3>
            <a href="#availability" className="btn">check availability</a>
         </div>
      </div>

      <div className="box swiper-slide"style={{ transform: 'scale(1)' }}>
         <img src="images/home-img-2.jpg" alt=""/>
         <div className="flex">
            <h3>foods and drinks</h3>
            <a href="#reservation" className="btn">make a reservation</a>
         </div>
      </div>

      <div className="box swiper-slide"style={{ transform: 'scale(1)' }}>
         <img src="images/home-img-3.jpg" alt=""/>
         <div className="flex">
            <h3>luxurious halls</h3>
            <a href="#contact" className="btn">contact us</a>
         </div>
      </div>
 
      </div>
      <div className="swiper-button-next"></div>
     <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
}

export default Home


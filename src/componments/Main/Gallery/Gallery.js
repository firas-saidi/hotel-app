import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper';

function Gallery() {
   const gallerySliderContainer = useRef(null);

   useEffect(() => {
     if (gallerySliderContainer.current) {
       new Swiper(gallerySliderContainer.current, {
         loop: true,
         effect: "coverflow",
         slidesPerView: "auto",
         centeredSlides: true,
         grabCursor: true,
         coverflowEffect: {
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 2,
           slideShadows: true,
         },
         pagination: {
           el: ".swiper-pagination",
         },
       });
     }
   }, []);
  return (
    <section className="gallery" id="gallery">

    <div ref={gallerySliderContainer} className="swiper gallery-slider">
       <div className="swiper-wrapper">
          <img src="images/gallery-img-1.jpg"  className="swiper-slide" alt=""/>
          <img src="images/gallery-img-2.jpg"  className="swiper-slide" alt=""/>
          <img src="images/gallery-img-3.jpg"  className="swiper-slide" alt=""/>
          <img src="images/gallery-img-4.jpg"  className="swiper-slide" alt=""/>
          <img src="images/gallery-img-5.jpg"  className="swiper-slide" alt=""/>
          <img src="images/gallery-img-6.jpg"  className="swiper-slide" alt=""/>
       </div>
       <div className="swiper-pagination"></div>
    </div>
 
 </section>
  )
}

export default Gallery
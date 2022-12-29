import { useEffect, useRef } from "react";
import Swiper from "swiper";


const Reviews =() =>{

   const reviewsSliderContainer = useRef(null);

  useEffect(() => {
    if (reviewsSliderContainer.current) {
      new Swiper(reviewsSliderContainer.current, {
        loop: true,
        slidesPerView: "auto",
        grabCursor: true,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 2,
          },
        },
        
      }
      );
    }
  }, []);
    return(
        <section className="reviews" id="reviews">
        <div ref={reviewsSliderContainer} className="swiper reviews-slider">
        <div className="swiper-wrapper">
         <div className="swiper-slide box">
            <img src="images/pic-1.png" alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo.</p>
         </div>
         <div className="swiper-slide box">
            <img src="images/pic-2.png" alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo.</p>
         </div>
         <div className="swiper-slide box">
            <img src="images/pic-3.png" alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo.</p>
         </div>
         <div className="swiper-slide box">
            <img src="images/pic-4.png" alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo.</p>
         </div>
         <div className="swiper-slide box">
            <img src="images/pic-5.png" alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo.</p>
         </div>
         <div className="swiper-slide box">
            <img src="images/pic-6.png" alt=""/>
            <h3>john deo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis optio dignissimos eaque aliquid explicabo.</p>
         </div>
      </div>

      <div className="swiper-pagination"></div>
   </div>

    </section>
    )

}

export default Reviews
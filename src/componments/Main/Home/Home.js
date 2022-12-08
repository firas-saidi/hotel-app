import React from 'react'

function Home() {
  return (
    <section className="home" id="home">

   <div className="swiper home-slider">

      <div className="swiper-wrapper">

         <div className="box swiper-slide">
            <img src="images/home-img-1.jpg" alt=""/>
            <div className="flex">
               <h3>luxurious rooms</h3>
               <a href="#availability" className="btn">check availability</a>
            </div>
         </div>

         <div className="box swiper-slide">
            <img src="images/home-img-2.jpg" alt=""/>
            <div className="flex">
               <h3>foods and drinks</h3>
               <a href="#reservation" className="btn">make a reservation</a>
            </div>
         </div>

         <div className="box swiper-slide">
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

  )
}

export default Home
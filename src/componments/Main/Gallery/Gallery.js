import React from 'react'

function Gallery() {
  return (
    <section className="gallery" id="gallery">

    <div className="swiper gallery-slider">
       <div className="swiper-wrapper">
          <img src="images/gallery-img-1.jpg" className="swiper-slide" alt=""/>
          <img src="images/gallery-img-2.webp" className="swiper-slide" alt=""/>
          <img src="images/gallery-img-3.webp" className="swiper-slide" alt=""/>
          <img src="images/gallery-img-4.webp" className="swiper-slide" alt=""/>
          <img src="images/gallery-img-5.webp" className="swiper-slide" alt=""/>
          <img src="images/gallery-img-6.webp" className="swiper-slide" alt=""/>
       </div>
       <div className="swiper-pagination"></div>
    </div>
 
 </section>
  )
}

export default Gallery
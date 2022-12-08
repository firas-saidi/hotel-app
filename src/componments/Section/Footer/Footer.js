import { Icon } from '@iconify/react';
const  Footer  =()=>{

    return(
        <section className="footer">

   <div className="box-container">

      <div className="box">
         <a href="tel:1234567890"><i className="fas fa-phone"></i> +123-456-7890</a>
         <a href="tel:1112223333"><i className="fas fa-phone"></i> +111-222-3333</a>
         <a href="mailto:shakhanas@gmail.com"><i className="fas fa-envelope"></i> Sfiras65@gmail.com</a>
         <a href="#/"><i className="fas fa-map-marker-alt"></i> Tunisia, Tunisia - 400104</a>
      </div>

      <div className="box">
         <a href="#home">Home</a>
         <a href="#about">About</a>
         <a href="#reservation">Reservation</a>
         <a href="#gallery">Gallery</a>
         <a href="#contact">Contact</a>
         <a href="#reviews">Reviews</a>
      </div>

      <div className="box">
         <a href="#/">facebook <i className="fab fa-facebook-f"></i></a>
         <a href="#/">twitter <i className="fab fa-twitter"></i></a>
         <a href="#/">instagram <i className="fab fa-instagram"></i></a>
         <a href="#/">linkedin <i className="fab fa-linkedin"></i></a>
      </div>

   </div>

   <div className="credit">&copy; copyright @ 2022 by Firas Saidi | all rights reseved!</div>
   <a href="#header" className="top" ><Icon className='ar' width="50" icon="bx:up-arrow-alt" /></a>
</section>
    )
}

export default Footer
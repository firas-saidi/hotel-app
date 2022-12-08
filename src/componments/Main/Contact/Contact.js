import React from 'react'

function Contact() {
  return (
<>
<section className="contact" id="contact">

<div className="row">

   <form action="" method="post">
      <h3>send us message</h3>
      <input type="text" name="name" required maxLength="50" placeholder="enter your name" className="box"/>
      <input type="email" name="email" required maxLength="50" placeholder="enter your email" className="box"/>
      <input type="number" name="number" required maxLength="10" min="0" max="9999999999" placeholder="enter your number" className="box"/>
      <textarea name="msg" className="box" required maxLength="1000" placeholder="enter your message" cols="30" rows="10"></textarea>
      <input type="submit" value="send message" name="send" className="btn"/>
    </form>

   <div className="faq">
      <h3 className="title">frequently asked questions</h3>
      <div className="box active">
         <h3>how to cancel?</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sunt aspernatur excepturi eos! Quibusdam, sapiente.</p>
      </div>
      <div className="box">
         <h3>is there any vacancy?</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam neque quaerat mollitia ratione? Soluta!</p>
      </div>
      <div className="box">
         <h3>what are payment methods?</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam neque quaerat mollitia ratione? Soluta!</p>
      </div>
      <div className="box">
         <h3>how to claim coupons codes?</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam neque quaerat mollitia ratione? Soluta!</p>
      </div>
      <div className="box">
         <h3>what are the age requirements?</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ipsam neque quaerat mollitia ratione? Soluta!</p>
      </div>
   </div>

    </div>
    </section>
    </>
   
)
}

export default Contact
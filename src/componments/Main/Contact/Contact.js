import React from 'react'
import Faq from './Faq'

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

      <Faq/>

    </div>
    </section>
    </>
   
)
}

export default Contact
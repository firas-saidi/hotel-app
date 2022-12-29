import React, { useEffect } from 'react'

const Faq = () => {
  useEffect(() => {
    const handleClick = (e) => {
      // Remove the 'active' class from all boxes
      document.querySelectorAll('.contact .row .faq .box').forEach(box => {
        box.classList.remove('active');
      });
      // Add the 'active' class to the clicked box
      e.currentTarget.parentElement.classList.add('active');
    }
    // Add the click event listener to all boxes
    document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
      faqBox.onclick = handleClick;
    });
  }, []);

  return (
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
  );
}

export default Faq

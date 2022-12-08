import React from 'react'

function Availability() {
  return (
    <section className="availability" id="availability">

   <form action="" method="post">
      <div className="flex">
         <div className="box">
            <p>check in <span>*</span></p>
            <input type="date" name="check_in" className="input" required/>
         </div>
         <div className="box">
            <p>check out <span>*</span></p>
            <input type="date" name="check_out" className="input" required/>
         </div>
         <div className="box">
            <p>adults <span>*</span></p>
            <select name="adults" className="input" required>
               <option value="1">1 adult</option>
               <option value="2">2 adults</option>
               <option value="3">3 adults</option>
               <option value="4">4 adults</option>
               <option value="5">5 adults</option>
               <option value="6">6 adults</option>
            </select>
         </div>
         <div className="box">
            <p>childs <span>*</span></p>
            <select name="childs" className="input" required>
               <option value="-">0 child</option>
               <option value="1">1 child</option>
               <option value="2">2 childs</option>
               <option value="3">3 childs</option>
               <option value="4">4 childs</option>
               <option value="5">5 childs</option>
               <option value="6">6 childs</option>
            </select>
         </div>
         <div className="box">
            <p>rooms <span>*</span></p>
            <select name="rooms" className="input" required>
               <option value="1">1 room</option>
               <option value="2">2 rooms</option>
               <option value="3">3 rooms</option>
               <option value="4">4 rooms</option>
               <option value="5">5 rooms</option>
               <option value="6">6 rooms</option>
            </select>
         </div>
      </div>
      <input type="submit" value="check availability" name="check" className="btn"/>
   </form>

</section>

    )
}

export default Availability
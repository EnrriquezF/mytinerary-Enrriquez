import React from 'react';
import { Link as AnchorB } from 'react-router-dom';

export default function () {
  return (
    <footer>
      <AnchorB to="/" className='footerLink' ><h3>My Itinerary</h3></AnchorB>
      <div className='footerContainer'>
        <div>
          <AnchorB to="/cities/" className='footerLink' ><h4>Cities</h4></AnchorB>
          <a href="#"><h5>Instagram</h5></a>
          <a href="tel:#"><h5>Phone contact</h5></a>
        </div>
        <div>
          <AnchorB to="/login" className='footerLink' > <h4>Log in</h4></AnchorB>
          <a href="#"><h5>Facebook</h5></a>
          <a href="tel:#"><h5>Whatsapp contact</h5></a>
        </div>
      </div>
      
    </footer>
  )
}

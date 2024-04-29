import React from 'react';
import { Link as AnchorB } from 'react-router-dom';

export default function () {
  return (
    <footer>
      <AnchorB to="/" className='footerLink' ><h3>• MyTinerary •</h3></AnchorB>
      <div className='footerContainer'>
        <div>
          This website is a React Project. <AnchorB to="/info" className='footerLink'>You can find information about it here.</AnchorB>
        </div>
        <div>
          <AnchorB to="/" className='footerLink' > <h4>Home</h4></AnchorB>
          <AnchorB to="/cities" className='footerLink' > <h4>Cities</h4></AnchorB>
        </div>
      </div>
      
    </footer>
  )
}

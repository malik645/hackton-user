import React from 'react'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import './Footer.css';
const Footer = () => {
  return (
      <div className='bg-dark p-4'>
          
        <div className="row d-flex justify-content-between align-items-center">
        <div className='col-md-6 text-white'><span>@ copyright Saylani.com</span>

        </div>
       <div className='col-md-3'>
       <img src={facebook} className="socialMedia-icons"/>
       <img src={instagram} className="socialMedia-icons ms-5"/>
       </div>

</div>
     
        </div>

  )
}

export default Footer

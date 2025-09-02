import React from 'react'

const ContactUs = () => {
  return (
    <>
      <div className="bg-gray-900 text-gray-400 mt-20 py-10">
        <div className='columns-4 px-40 justify-around gap-20'>
          {/* shophub */}
          <div className="leading-relaxed">
            <h2 className='text-white text-lg font-bold leading-loose'>ShopHub</h2>
            <p>Your one-stop destination for quality products at great prices.</p>
          </div><br /> <br />
          {/* Customer Service */}
          <div className="leading-loose">
            <h2 className='text-white text-lg font-bold leading-loose'>Customer Service</h2>
            <ul>
              <li className='hover:text-white'><a href="#">Contact Us</a></li>
              <li className='hover:text-white'><a href="#">FAQ</a></li>
              <li className='hover:text-white'><a href="#">Returns</a></li>
              <li className='hover:text-white'><a href="#">Shipping Info</a></li>
            </ul>
          </div>
          {/* Company */}
          <div className="leading-relaxed">
            <h2 className='text-white text-lg font-bold leading-loose'>Company</h2>
            <ul>
              <li className='hover:text-white'><a href="#">About Us</a></li>
              <li className='hover:text-white'><a href="#">Careers</a></li>
              <li className='hover:text-white'><a href="#">Privacy Policy</a></li>
              <li className='hover:text-white'><a href="#">Terms of Service</a></li>
            </ul> 
          </div>
          {/* Connect */}
          <div className="leading-relaxed">
            <h2 className='text-white text-lg font-bold leading-loose'>Connect</h2>
            <ul>
              <li className='hover:text-white'><a href="#">Facebook</a></li>
              <li className='hover:text-white'><a href="#">Twitter</a></li>
              <li className='hover:text-white'><a href="#">Instagram</a></li>
              <li className='hover:text-white'><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <hr className='border-t ms-40 border-gray-700 mt-5 w-[1200px] text-center' />
        <p className='text-center mt-5 pb-10'>© 2024 ShopHub. All rights reserved.</p>
      </div>
    </>
  )
}

export default ContactUs

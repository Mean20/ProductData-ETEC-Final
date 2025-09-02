import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Product from './Components/Product'
import ProductDetailModal from './Components/ProductDetailModal'
import ContactUs from './Components/ContactUs'

const App = () => {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <Home />
      <Product />
      <ProductDetailModal /> {/* 👈 add this */}
      <ContactUs />
    </div>
  )
}

export default App

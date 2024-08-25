import React from 'react'
import "./CSS/Checkout.css"
import Navbar from '../Includes/Navbar'
import DeliveryInfo from './DeliveryInfo '
import OrderSummary from './OrderSummary'
import Footer from '../Includes/Footer'

const CheckOut = () => {
  return (
    <>
    <Navbar/>
    <div className="flex">
      <DeliveryInfo/>
      <OrderSummary/>
      </div>
      <Footer/>
    </>
  )
}

export default CheckOut

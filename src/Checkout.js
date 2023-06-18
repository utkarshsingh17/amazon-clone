import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoout_left">
        <img className="checkout_ad" src="https://static.crunchyroll.com/fms/desktop_large/1050x350/f12aa354-ff10-44e3-ae82-f746017c7efd.png"alt=""/>
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

        </div>
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout

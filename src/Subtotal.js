import React from 'react'
import'./Subtotal.css';
import Currencyformat from 'react-currency-format';

function Subtotal() {
  return (
    <div className="subtotal">
      <Currencyformat
        renderText={(value)=>(
            <>
            <p>
                {/*Part of homework*/}
                Subtotal (0 items) : <strong>0</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox"/>This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        value={0} //Part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal

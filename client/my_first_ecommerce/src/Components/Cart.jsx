import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, resetCart } from '../redux/cartReducer'
import { loadStripe } from '@stripe/stripe-js'
import { makeRequest } from '../makeRequest'

export default function Cart() {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  const totalPrice = () => {
    let total = 0
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(2)
  }

  const stripePromise = loadStripe(
    'pk_test_51MEbblCTE8sPmZsyDhiWUZxMAKIELU6Q4Ed0kuCfE7lhFIqoV5lifdPOkPmMQECFkuaduuZ863k080klpvsqJO8W006WlLHxhd',
  )

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise
      const res = await makeRequest.post('/orders', {
        products,
      })

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x {item.price} €
            </div>
          </div>
          <i
            className="fa-solid fa-trash"
            onClick={() => dispatch(removeItem(item.id))}
          ></i>
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>{totalPrice()}€</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHEKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  )
}

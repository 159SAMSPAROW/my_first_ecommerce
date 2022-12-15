import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartReducer'

export default function Product() {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
  
  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  )  

  return (
    <div className="product">
      { loading ? "loading" : (<>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img")} />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")} />
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>{data?.attributes?.price}€</span>
        <p>
          {data?.attributes?.desc}
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          price:data.attributes.price,
          img:data.attributes.img.data.attributes.url,
          quantity,
        }))}>
          <i className="fa-regular fa-cart-shopping">ADD TO CART</i>
        </button>
        <div className="links">
          <div className="item">
            <i className="fa-regular fa-heart"> ADD TO WISH LIST</i>
          </div>
          <div className="item">
            <i className="fa-light fa-scale-balanced"> ADD TO COMPARE</i>
          </div>
        </div>
        <div className="info">
          <span>Vendor : polo</span>
          <span>Product Type : Tshirt</span>
          <span>Tag : T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div></>)}
    </div>
  )
}

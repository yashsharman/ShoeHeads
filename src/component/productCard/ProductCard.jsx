import React from 'react'
import './ProductCard.css'

function ProductCard({imgUrl, productName, productPrice}) {
  return (
    <div className='ProductCard'>
        <div className="ProductImageContainer" style={{backgroundImage: `url(${imgUrl})`}}></div>
        <div className="productInfo">
            <h3>{productName}</h3>
            <p>{productPrice}</p>
        </div>
    </div>
  )
}

export default ProductCard
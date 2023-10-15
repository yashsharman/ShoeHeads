import React from 'react'
import  './ProductContainer.css'
import ProductCard from '../productCard/ProductCard'
import shoe1Url from '../../assets/images/shoe1.jpg'
import shoe2Url from '../../assets/images/shoe2.jpg'
import shoe3Url from '../../assets/images/shoe3.jpg'
import shoe4Url from '../../assets/images/shoe4.jpg'
import shoe5Url from '../../assets/images/shoe5.jpg'

function ProductContainer() {
  return (
    <div className='ProductContainer'>
        <ProductCard imgUrl={shoe1Url} productName={"Nike Runners"} productPrice={"$100"}/>
        <ProductCard imgUrl={shoe2Url} productName={"Designer Shoe"} productPrice={"$250"}/>
        <ProductCard imgUrl={shoe3Url} productName={"Flat Soul"} productPrice={"$100"}/>
        <ProductCard imgUrl={shoe4Url} productName={"Leather Shoe"} productPrice={"$500"}/>
        <ProductCard imgUrl={shoe5Url} productName={"Converse Shoe"} productPrice={"$100"}/>
        <ProductCard imgUrl={shoe4Url} productName={"Leather Shoe"} productPrice={"$500"}/>
        <ProductCard imgUrl={shoe2Url} productName={"Designer Shoe"} productPrice={"$250"}/>
        <ProductCard imgUrl={shoe3Url} productName={"Flat Soul"} productPrice={"$100"}/>
        <ProductCard imgUrl={shoe5Url} productName={"Converse Shoe"} productPrice={"$100"}/>
        <ProductCard imgUrl={shoe1Url} productName={"Nike Runners"} productPrice={"$100"}/>
    </div>
  )
}

export default ProductContainer
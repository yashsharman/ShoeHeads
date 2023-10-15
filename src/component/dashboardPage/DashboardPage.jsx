import React from 'react'
import './dashboard.css'
import SearchBox from '../searchBox/SearchBox'
import TopcardContainer from '../topcard-container/TopcardContainer'
import HomeSwiper from '../homeswiper/HomeSwiper'
import ProductContainer from '../porductContainer/ProductContainer'


function DashboardPage() {
  return (
    <section className='DashboardPage'>
      <div className="header">
        <h3>Hello Yash 👋,</h3>
          <SearchBox/>
      </div>
      <HomeSwiper/>
      <TopcardContainer/>
      <ProductContainer/>
    </section>
  )
}

export default DashboardPage
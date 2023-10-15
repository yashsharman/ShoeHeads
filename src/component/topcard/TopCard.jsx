import React from 'react'
import './TopCard.css'
import Lottie from 'lottie-react'

function TopCard({category, imageUrl}) {
  return (
        <div className='TopCard'>
      <div className="icon-container">
        <Lottie className='lottie-div' animationData={imageUrl} />
      </div>
      <div className="top-card-info">
        <h4>
        {category}
        </h4>
      </div>
    </div>
  )
}

export default TopCard
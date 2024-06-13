import React from 'react'

const Collections = (props) => {

  const{title,image1,image2,image3,image4,image5,image6}=props.gentsfashion
  return (
    <div className='collectionSection'>
    <h2>Men Fashion</h2>
    <div className="menimages">
      <img src={image1} alt={title}/>
      <img src={image2} alt={title}/>
      <img src={image3} alt={title}/>
      <img src={image4} alt={title}/>
      <img src={image5} alt={title}/>
      <img src={image6} alt={title}/>
      </div>
    </div>
  )
}

export default Collections

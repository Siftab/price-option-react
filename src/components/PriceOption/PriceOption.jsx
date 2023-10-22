import React from 'react'
import PropTypes from 'prop-types'
import {IoIosCheckmarkCircle} from 'react-icons/io'
const PriceOption = ({option}) => {
    const{price,membershipType,features}=option;
  return (
    <div className='bg-blue-600 text-white p-14 flex flex-col'><h2 className='flex flex-col text-center'>
        <span className="text-7xl">{price}</span>
        <span className='text-4xl ml-28'>/per month</span>
    </h2>
    
    <h2 className='text-3xl text-center'>{membershipType}</h2>
    <div className='ml-14 mt-5 flex-grow'>
        {features.map((feature,idx)=><li key={idx} className='flex items-center'><IoIosCheckmarkCircle className='text-yellow-300'/>{feature}</li>)}
    </div>
    <button className='bg-yellow-300 w-full py-5 rounded-2xl mt-6'>buy now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option:PropTypes.object
    ,membershipType:PropTypes.string,
    features:PropTypes.array

}

export default PriceOption
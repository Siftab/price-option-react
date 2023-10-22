import React from 'react'
import PropTypes from 'prop-types'
import PriceOption from '../PriceOption/PriceOption'

const PriceOptions = () => {
    const PriceOptions = [
        {
            "id": 1,
            "membershipType": "Basic",
            "price": 29.99,
            "description": "Access to basic gym facilities",
            "features": [
                "Access to cardio and strength training equipment",
                "Locker room access",
                "One complimentary fitness assessment",
                "Access to sauna and steam room",
                "Discounted rates for personal training sessions"
            ]
        },
        {
            "id": 2,
            "membershipType": "Standard",
            "price": 49.99,
            "description": "Access to standard gym facilities and classes",
            "features": [
                "Access to all basic membership features",
                "Unlimited fitness classes",
                "Nutritional guidance",
                "Two complimentary fitness assessments",
                "Access to indoor swimming pool",
                "Discounts at the gym store"
            ]
        },
        {
            "id": 3,
            "membershipType": "Premium",
            "price": 79.99,
            "description": "Access to premium gym facilities, classes, and personal training sessions",
            "features": [
                "Access to all standard membership features",
                "Personal training sessions (twice a month)",
                "Customized workout plans",
                "Four complimentary fitness assessments",
                "Access to massage and spa services",
                "Free gym apparel and accessories"
            ]
        }
    ]
    return (<>
        <div>best PriceOptions:{PriceOptions.length}</div>
        <div className='grid md:grid-cols-3 gap-4 px-7'> {
            PriceOptions.map((option,idx)=><PriceOption key={idx} option={option}></PriceOption>)
        }</div>
       </>
    )
}

PriceOptions.propTypes = {}

export default PriceOptions
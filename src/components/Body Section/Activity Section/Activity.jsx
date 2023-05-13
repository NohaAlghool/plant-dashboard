import React from 'react'
import './Activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import user from '../../../assets/images/user2.jpg'
import user1 from '../../../assets/images/user1.jpg'
import user2 from '../../../assets/images/user2.jpg'
import user3 from '../../../assets/images/user3.jpg'
import user4 from '../../../assets/images/user4.jpg'
import user5 from '../../../assets/images/user5.jpg'
const Activity = () => {

  return (

    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          see All
          <BsArrowRightShort  className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">

        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image"/>
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new piant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image"/>
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new piant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image"/>
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new piant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image"/>
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new piant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image"/>
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new piant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>





      </div>



    </div>
  )
}

export default Activity
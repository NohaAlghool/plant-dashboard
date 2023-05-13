import React from 'react'
import './Listing.css'

import { BsArrowRightShort } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import img from '../../../assets/images/2.png'
import img2 from '../../../assets/images/plant2.png'
import img3 from '../../../assets/images/7.png'
import img4 from '../../../assets/images/6.png'
import user1 from '../../../assets/images/user1.jpg'
import user2 from '../../../assets/images/user2.jpg'
import user3 from '../../../assets/images/user3.jpg'
import user4 from '../../../assets/images/user4.jpg'
const Listing = () => {
  return (
    <div className="lisitingSection">


      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          see All <BsArrowRightShort
            className="icon" />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" srcset="" />
          <h3>Anuual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="Image Name" srcset="" />
          <h3>Coffe Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img3} alt="Image Name" srcset="" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img4} alt="Image Name" srcset="" />
          <h3>Spider Plant</h3>
        </div>



      </div>

      <div className="sellers flex">
        
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              see All <BsArrowRightShort className='icon'/>
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14,556 Plants sold <br />
                <small>
                  21 Sellers <span className='date'>7 Days</span>
                </small>
              </span>
            </div>
          </div>


        </div>

        <div className="FeaturedSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              see All <BsArrowRightShort className='icon'/>
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                28,556 Plants sold <br />
                <small>
                  26 Sellers <span className='date'>31 Days</span>
                </small>
              </span>
            </div>
          </div>


        </div>




      </div>
    </div>
  )
}

export default Listing
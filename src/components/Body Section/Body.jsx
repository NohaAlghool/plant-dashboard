import React from 'react'
import './Body.css'
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import Activity from './Activity Section/Activity'
function Body() {
  return (
    <div className='mainContent'>
      <Top/>
      
      <div className='bottom flex'>
        <Listing/>
        <Activity/>
      </div>


    </div>
  )
}
//25:45
export default Body
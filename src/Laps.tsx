import React from 'react'
import LapRecord from './LapRecord';
const Laps = (props) => {
    
  return (
    <div className="lap-table">

        {props.laps.map((item, i)=>(<LapRecord laps={item}/>) )}
    </div>
  )
}

export default Laps

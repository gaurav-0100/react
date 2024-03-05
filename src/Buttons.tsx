import React from 'react'

const Buttons = (props) => {
  return (
    <div className="Buttons">
        <button className="start" onClick={props.handleStart}>Start</button>
        <button className="pause" onClick={props.handlePause}>Pause</button>
        <button className="reset" onClick={props.handleReset}>reset</button>
        <button className="take-laps" onClick={props.handleLaps}>Lap</button>
    </div>
  )
}

export default Buttons

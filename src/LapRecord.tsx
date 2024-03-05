import React from 'react'

const LapRecord = (props) => {
    const {id, duration, start, end}= props.laps;
    // console.log(duration);
  return (
    <div className="lap-record">
        <div className="id">{id}</div>
        <div className="duration">{duration}</div>
        <div className="start">{start}</div>
        <div className="end">{end}</div>
    </div>
  )
}

export default LapRecord

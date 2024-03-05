import React from 'react'

const MainTime = (props) => {
    const hour= Math.floor((props.time)/3600);
    const minutes=Math.floor((parseInt(props.time)-3600*hour)/60);
    const seconds=((parseInt(props.time)-3600*hour)-60*minutes);

  return (
    <div className="maintime">
        {/*TODO-- write this in hour, minutes and sec*/}
        <div className="hour">{hour}</div>
        <div className="minutes">{minutes}</div>
        <div className="seconds">{seconds}</div>
    </div>
  )
}

export default MainTime

import React, { useEffect, useState } from 'react'
import MainTime from './MainTime';
import Buttons from './Buttons';
import axios from 'axios';
const StopWatch = ({laps, setLaps, start, setStart, setPause, pause, curTime, setCurTime}) => {
    
    
    //TODO
    useEffect(()=>{
        let interval=null;
        if(start==true && pause==false){
            interval=setInterval(()=>{
                
                setCurTime((current)=>current+1);
            }, 1000);
        }
        else{
            if(interval!=null)
            clearInterval(interval);
        }
        return ()=>{
            if(interval!=null)
            clearInterval(interval);
        }
    },[start, pause]);
    const handleLaps=()=>{
        let lapendTime=curTime;
        let lapstartTime=0;
        let lapno=1;
        if(laps.length>0){
            lapstartTime=laps[0].end;
            lapno=laps[0].id+1; 
        }
        
        const duration= lapendTime-lapstartTime;
        
        
        
        const curLap={
            id:lapno,
            duration:duration,
            start:lapstartTime,
            end:lapendTime
        }
        lapstartTime=lapendTime;
        lapno=lapno+1;
        const newLaps=[curLap,...laps];
        console.log(newLaps);
        setLaps(newLaps);
        const AddNewLaps=async()=>{
			const newLap= laps[0];
			if(newLap){
				axios.post("http://localhost:3000/laps", curLap);
			}
		}
		AddNewLaps();
    }
    const handleStart=()=>{
        setStart(true);
        setPause(false);
    }
    const handlePause=()=>{
        setPause((curstate)=>!curstate);
    }
    const handleReset=()=>{
        setCurTime(0);
        setStart(false);
    }
  return (
    <div className="stopwatch">
        {/* hi */}
        <MainTime 
        time={curTime}
        />
        <Buttons 
        pause={pause}
        start={start}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
        handleLaps={handleLaps}
        />

    </div>
  )
}

export default StopWatch

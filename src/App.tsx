import { useEffect, useState } from 'react';
import StopWatch from './StopWatch';
import Laps from './Laps';
import './App.css'
import axios from 'axios';

function App() {
	const [start, setStart]= useState(false);
    const [pause, setPause]= useState(true);
    const [curTime, setCurTime]= useState(0);
	const [laps, setLaps]=useState([]);
	useEffect(()=>{
		const fetchdata= async()=>{
			try{
				const data= await axios.get("http://localhost:3000/laps");
				
				setLaps(data.data);
			}
			catch(error){
				console.log(error);
			}
		}
		fetchdata();
	}, [])
	
	
	

    return (
		<>
			 <StopWatch 
			 laps={laps}
			 setLaps={setLaps}
			 start={start}
			 setStart={setStart}
			 pause={pause}
			 setPause={setPause}
			 curTime={curTime}
			 setCurTime={setCurTime}
			  />
			 <Laps laps={laps}/>
			 
		</>
    )
}

export default App

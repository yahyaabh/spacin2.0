import React, { useState } from 'react'
import Header from '../components/Header'
import { RoverForm } from '../components/RoverForm';
const Rovers:React.FC =( )=> {
    //type for the rovers
    type Rover = "curiosity"|"opportunity"|"spirit";
    

    //the state that indicates the current rover the user choses
    //the state can be one of the three options i declared above while creating the type
    const [rover,setRover] = useState<Rover>("curiosity");

  return (
    <div className='h-screen'>
        <Header></Header>
        <RoverForm setRover={setRover}></RoverForm>
    </div>
  )
}

export default Rovers

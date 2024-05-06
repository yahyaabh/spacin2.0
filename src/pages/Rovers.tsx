import React, { useState } from 'react'
import Header from '../components/Header'
import { RoverForm } from '../components/RoverForm';
import { RoverManifest } from '../components/RoverManifest';
const Rovers:React.FC =( )=> {
    //type for the rovers
    type Rover = "curiosity"|"opportunity"|"spirit";
    

    //the state that indicates the current rover the user choses
    //the state can be one of the three options i declared above while creating the type
    const [rover,setRover] = useState<Rover>("curiosity");

  return (
    <div className='h-screen flex justify-start items-center flex-col'>
        <Header></Header>
        <RoverForm setRover={setRover}></RoverForm>
        <RoverManifest rover={rover}></RoverManifest>
    </div>
  )
}

export default Rovers

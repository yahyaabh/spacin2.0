import React, { useState } from 'react'
import Header from '../components/Header'
import { RoverForm } from '../components/RoverForm';
import { RoverManifest } from '../components/RoverManifest';
import {RoverImages} from "../components/RoverImages"
const Rovers:React.FC =( )=> {
    //type for the rovers
    type Rover = "curiosity"|"opportunity"|"spirit";
    

    //the state that indicates the current rover the user choses
    //the state can be one of the three options i declared above while creating the type
    const [rover,setRover] = useState<Rover>("curiosity");

    //for having the dates
    const [land,setLand] = useState('');
    const [max,setMax]  = useState('');
    

  return (
    <div className='h-screen flex justify-start items-center flex-col'>
        <Header></Header>
        <RoverForm setRover={setRover}></RoverForm>
        <RoverManifest land={land} max={max} setLand={setLand} setMax={setMax} rover={rover}></RoverManifest>
        <RoverImages land={land} max={max}></RoverImages>
    </div>
  )
}

export default Rovers

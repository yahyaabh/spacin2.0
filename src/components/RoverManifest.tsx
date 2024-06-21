import React, { useEffect, useState } from 'react'
import Loader from './Loader'

interface props {
    rover : Rover,
    land: string,
    max: string,
    setLand:React.Dispatch<React.SetStateAction<string>>,
    setMax : React.Dispatch<React.SetStateAction<string>>
}
type Rover = "curiosity"|"opportunity"|"spirit"|"";

export const RoverManifest:React.FC<props> = ({rover,land,max,setLand,setMax}) => {

    const [loading, setLoading] = useState(false);
    const [launch,setLaunch] = useState('');
   
    //function for getting data from nasas api
    //we are getting all info about the rover from landing date to last date on mars...
    const fetchData = async() => {
        setLoading(true);
        const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${import.meta.env.VITE_SECRET_KEY}`, {method: "GET"});
        const data = await res.json();
        setLaunch(data.photo_manifest.launch_date);
        setLand(data.photo_manifest.landing_date);
        setMax(data.photo_manifest.max_date);
        setLoading(false);
    }

    //run the fetching function each time the rover changes
    useEffect(() => {
        fetchData();
    }
        ,[rover])


  return (
        //if rover is not empty show the text
        rover !== "" ?

                loading?

                <Loader/> :

            <div className='mt-10 flex flex-col justify-center rounded-md items-center bg-black text-white w-3/4 md:w-2/4'>
                <h1 className='font-bold  text-xl my-2 text-purple-light'>{rover}</h1>
                <p className='text-center'>It was launched at <span className='font-semibold'>{launch}</span> and it landed on Mars at <span className='font-semibold'>{land}</span> and the last day it took a photo was <span className='font-semibold'>{max}</span>.</p>
            </div>

            
        :
            <div>
                
            </div>
    
        
  )
}

import React, { useEffect, useState } from 'react'

interface props {
    rover : Rover,
    land: string,
    max: string,
    setLand:React.Dispatch<React.SetStateAction<string>>,
    setMax : React.Dispatch<React.SetStateAction<string>>
}

type Rover = "curiosity"|"opportunity"|"spirit";

export const RoverManifest:React.FC<props> = ({rover,land,max,setLand,setMax}) => {

    const [launch,setLaunch] = useState('');
   

    const fetchData = async() => {
        const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${import.meta.env.VITE_SECRET_KEY}`, {method: "GET"});
        const data = await res.json();
        setLaunch(data.photo_manifest.launch_date);
        setLand(data.photo_manifest.landing_date);
        setMax(data.photo_manifest.max_date);
    }

    useEffect(() => {
        fetchData();
    }
        ,[rover])
  return (
    <div className='mt-10 flex flex-col justify-center rounded-md items-center bg-black text-white w-2/4'>
        <h1 className='font-bold  text-xl my-2 text-purple-light'>{rover}</h1>
        <p className='text-center'>It was launched at <span className='font-semibold'>{launch}</span> and it landed on Mars at <span className='font-semibold'>{land}</span> and the last day it took a photo was <span className='font-semibold'>{max}</span>.</p>
    </div>
  )
}

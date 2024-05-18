import React, { useState } from 'react';
import {useForm} from "react-hook-form";

type Rover = "curiosity"|"opportunity"|"spirit";

interface props {
    land:string,
    max:string,
    setCams: React.Dispatch<React.SetStateAction<never[]>>,
    rover:Rover,
    setDate:React.Dispatch<React.SetStateAction<string>>,
    date :string
}

type formData = {
    date:string
}

export const RoverImages:React.FC<props>= ({land,max,setCams,rover,setDate,date}) => {

    // const [date,setDate]= useState("")

    const {register,handleSubmit} = useForm<formData>();

    const onSubmit = async(data:formData) => {
        setDate(data.date);
        //make a request to manifest and get filter to get the cameras first
        const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${import.meta.env.VITE_SECRET_KEY}`, {method: "GET"});
        const datas = await res.json();
        //console.log(date.toString());
        const filtered = await datas.photo_manifest.photos.filter((day: { earth_date: string; }) => {
            return day.earth_date == date.toString();
        });
        //console.log(filtered[0].cameras);
        setCams(filtered[0].cameras);
    }

  return (
    <>
        <form  className='mt-10 flex flex-col justify-center rounded-md items-center bg-white text-black border border-black p-4 w-3/4 md:w-2/4' onSubmit={handleSubmit(onSubmit)}>
            <p className='my-4  font-semibold md:text-lg text-center'>choose a date between {land} and {max}:</p>
            <input className='my-4 hover:p-1  duration-200' {...register("date")} max={max} min={land} type='date'></input>
            <button className='border-2 p-2 hover:p-1 hover:m-3 m-2 rounded-md onhover:border-purple bg-purple text-white hover:bg-white hover:text-purple duration-200 '>submit</button>
        </form>
        
    </>
  )
}


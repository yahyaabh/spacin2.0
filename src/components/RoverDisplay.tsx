import React, { useEffect, useState } from 'react';
import {useForm} from "react-hook-form";

type Rover = "curiosity"|"opportunity"|"spirit";

interface props {
    cams: never[],
    rover:Rover,
    date:string
}

type formData =  {
    cam : string
}

export const RoverDisplay:React.FC<props> = ({cams,rover,date}) => {

    const { register,handleSubmit } = useForm<formData>();
    const [pic,setPic] = useState<string>();
    const [camera,setCamera] = useState<string>();

//on the camera submit
    //change the camera state
    const onSubmit = async(data:formData) => {
            
            setCamera(data.cam);
            
    }

    //function for fetching data from api
    const fetchImage = async() => {
            setPic("");
            const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&api_key=${import.meta.env.VITE_SECRET_KEY}`, {method: "GET"});
            
            const datas = await res.json();
            
           // console.log(datas.photos[0].img_src);
           if(datas.photos[0]) {
            setPic(datas.photos[0].img_src);
           }
           
    }
    //call the function each time the camera changes
    useEffect(()=> {
            fetchImage();
    },[camera])

  return (
    <>
        {cams.length == 0 ? 
        <p className='my-6 font-semibold rounded-md text-md bg-black text-red-600 p-4'>no photos on this day please choose another one</p>
        :
        <>
        <form className=' flex flex-col justify-center items-center my-10 border border-black rounded-md p-4 w-3/4 md:w-2/4'  onSubmit={handleSubmit(onSubmit)}>
            <p className='p-2 font-bold text-lg text-purple'>choose a camera:</p>
            <select className='w-2/5 bg-white text-black border border-black rounded-sm text-center md:w-1/4' {...register("cam")}>
                {cams.map((cam) => {
                    return <option key={cam} value={cam}>{cam}</option>
                })}
            </select>
            <button className='border-2 p-2 hover:p-1 hover:m-3 m-2 rounded-md border-purple bg-purple text-white hover:bg-white hover:text-purple duration-200 '>choose</button>
        </form>

          {pic?      
        <img  className="w-1/4 h-2/4 rounded-md mb-10 text-red-600 font-semibold" src={pic} alt="please choose another one the browser cannot open this one."></img>
        :<p className=' text-red-600 font-semibold'>Sorry there's no photos at this day </p> }
        </>
        }
    </>
  )
}

import React from 'react';
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

    const onSubmit = async(data:formData) => {
        //make a request depending on date,cam,rover
            console.log(data.cam);
            console.log(date);
            console.log(rover)
    }

  return (
    <>
        {cams.length == 0 ? 
        <p className='my-6 font-semibold rounded-md text-md bg-black text-red-600 p-4'>no photos on this day please choose another one</p>
        :
        <form className='w-screen flex flex-col justify-center items-center my-10 border border-black rounded-md p-4 w-3/4 md:w-2/4'  onSubmit={handleSubmit(onSubmit)}>
            <p className='p-2 font-bold text-lg text-purple'>choose a camera:</p>
            <select className='w-2/5 bg-white text-black border border-black rounded-sm text-center md:w-1/4' {...register("cam")}>
                {cams.map((cam) => {
                    return <option key={cam} value={cam}>{cam}</option>
                })}
            </select>
            <button className='border-2 p-2 hover:p-1 hover:m-3 m-2 rounded-md border-purple bg-purple text-white hover:bg-white hover:text-purple duration-200 '>choose</button>
        </form>
        }
    </>
  )
}

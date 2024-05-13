import React from 'react';
import {DevTool} from "@hookform/devtools";
import {useForm} from "react-hook-form";

interface props {
    land:string,
    max:string
}

type formData = {
    date:string
}

export const RoverImages:React.FC<props>= ({land,max}) => {

    const {register,control,handleSubmit} = useForm<formData>();

    const onSubmit = async(data:formData) => {
        console.log(data.date);
    }

  return (
    <>
        <form className='mt-10 flex flex-col justify-center rounded-md items-center bg-black text-white w-2/4' onSubmit={handleSubmit(onSubmit)}>
            <p className='my-4  font-semibold md:text-lg text-center'>choose a date between {land} and {max}:</p>
            <input className='my-4 hover:p-1 duration-200' {...register("date")} max={max} min={land} type='date'></input>
            <button className='border-2 p-2 hover:p-1 m-2 rounded-md onhover:border-purple bg-purple text-white hover:bg-white hover:text-purple duration-200 '>submit</button>
        </form>
        <DevTool control={control}/>
    </>
  )
}


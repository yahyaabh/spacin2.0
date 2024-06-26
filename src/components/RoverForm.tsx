import React from 'react';
import {useForm} from "react-hook-form"

//rover type
type Rover = "curiosity"|"opportunity"|"spirit"|"";


interface Props  {
    //setStateAction<string> --> setStateAction<Rover> 
    setRover : React.Dispatch<React.SetStateAction<Rover>>;
}

//for the form
type formData ={
    rover: Rover
}

export const RoverForm:React.FC<Props> = ({setRover}) => {  

    const {register,handleSubmit} = useForm<formData>();
    const onSubmit = (data:formData) => {
            setRover(data.rover)
    }

    

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className='w-screen flex flex-col justify-center items-center'>
            <h1 className='p-2 font-bold text-lg text-purple'>choose a rover:</h1>
            <select  {...register("rover")} className='w-2/5 bg-white text-black border border-black rounded-sm text-center md:w-1/4' >
                <option  value="curiosity">curiosity</option>
                <option value="opportunity">opportunity</option>
                <option value="spirit">spirit</option>
            </select>
            <button className='border-2 p-2 hover:p-1 hover:m-3 m-2 rounded-md border-purple bg-purple text-white hover:bg-white hover:text-purple duration-200 '>choose</button>
            
        </form>
        
        </>
  )
}

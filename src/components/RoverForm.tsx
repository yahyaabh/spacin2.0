import React from 'react';
import {useForm} from "react-hook-form"

//here we define the type for rovers again
// and for the setRover function since it is not defined here
//wee need to manipulate the setStateAction<string> --> setStateAction<Rover>

type Rover = "curiosity"|"opportunity"|"spirit";
interface Props  {
    setRover : React.Dispatch<React.SetStateAction<Rover>>;
}

export const RoverForm:React.FC<Props> = ({setRover}) => {  


    const form = useForm();
  return (
    <>
        <form className='w-screen flex flex-col justify-center items-center'>
            <h1 className='p-2 font-bold text-md'>choose a rover:</h1>
            <select className='w-2/5 bg-white text-black border border-black rounded-sm text-center md:w-1/4' >
                <option value="curiosity">curiosity</option>
                <option value="opportunity">opportunity</option>
                <option value="spirit">spirit</option>
            </select>
        </form>
    </>
  )
}

import React, { useEffect, useState } from 'react';
import {GoogleGenerativeAI} from "@google/generative-ai"

interface props {
    pic : string
}


 const ImageAi:React.FC<props> = ({pic}) => {

    const [text,setText] = useState("");
  
    //get gemini api key and api config
    const geminiKey = import.meta.env.VITE_GEMINI_KEY;
    const genAI = new GoogleGenerativeAI(geminiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


    //function that sends a req to the api with the text and url

    const run = async() => {
        const prompt = `the next picture is from nasa's rovers , explain it in one paragraph ${ localStorage.getItem('pic')} `;
        const result =  await model.generateContent(prompt);
        const res = await result.response;
        const text = res.text();
        setText(text);
   
    }

    //run this function each
    //   useEffect(() => {
        
        
    //     run();
    //   },[])

  return (
    <div className='flex flex-col items-center justify-center'>
        {text?
        <p className=' font-semibold text-lg text-center '>{text}</p>:
        <button className=' animate-pulse border-2 p-2  rounded-md border-purple bg-purple text-white duration-200 my-2' onClick={run}>let ai analyse your picture</button>
 }  
        </div>
  )
}

export default ImageAi;
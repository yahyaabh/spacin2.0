import React, { useEffect, useState } from 'react';
import {GoogleGenerativeAI} from "@google/generative-ai"

 const Analysis:React.FC = () => {

    const [text,setText] = useState("");
  
    const geminiKey = import.meta.env.VITE_GEMINI_KEY;
    
    const genAI = new GoogleGenerativeAI(geminiKey);
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


    const run = async() => {
        const prompt = `the next picture is from nasa's rovers , explain it in one paragraph ${ localStorage.getItem('pic')} `;
        const result =  await model.generateContent(prompt);
        const res = await result.response;
        const text = res.text();
        setText(text);
    }

      useEffect(() => {
        
        
        run();
      },[])

  return (
    <div className=''>
        <p className=' font-semibold text-lg '>{text}</p>
        </div>
  )
}

export default Analysis;
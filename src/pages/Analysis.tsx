import React, { useEffect } from 'react';
import {GoogleGenerativeAI} from "@google/generative-ai"

 const Analysis:React.FC = () => {
    const geminiKey = import.meta.env.VITE_SECRET_KEY;
    console.log(geminiKey);
    const genAI = new GoogleGenerativeAI(geminiKey);
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


    const run = async() => {
        const prompt = "write a phrase about space";
        const result =  await model.generateContent(prompt);
        const res = await result.response;
        console.log(res.text());

    }

    useEffect( () => {
        // run();
    })

  return (
    <div>
        <p>Analysis</p></div>
  )
}

export default Analysis;
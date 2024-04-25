import { useState,useEffect } from "react"
import Header from "../components/Header"

const Pod:React.FC = () => {
  const [image,setImage] = useState("");
  const [text,setText] = useState("");
  const [title,setTitle] = useState("");
  const [date,setDate] = useState("");
  

  const fetchData = async() => {
      const res = await fetch(`https://api.nasa.gov/planetary/apod/?api_key=${import.meta.env.VITE_SECRET_KEY}`, {method: "GET"});
      const data = await res.json();
      setImage(data.url);
      setText(data.explanation);
      setTitle(data.title);
      setDate(data.date);
  }

  useEffect( ()=>{
              fetchData();

  }
  
  ,[image,text,title,date])

  return (
    <div className="h-screen">
        <Header></Header>
        <div className="bg-black  flex flex-col items-center justify-center">
            <h1 className="text-xl text-purple-light font-bold my-3 lg:text-3xl ">The image of today :</h1>
            <h1 className="text-md text-white font-semibold my-4 lg:text-3xl ">{title}</h1>
            <img className="w-1/2 h-1/2 rounded-md" src={image}></img>
            <p className="text-white text-sm">{date} </p>
            <p className="text-white m-6 text-center">{text}</p>
        </div>
    </div>
  )
}

export default Pod
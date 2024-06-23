import { useState,useEffect } from "react"
import Header from "../components/Header"
import Loader from "../components/Loader";
const Pod:React.FC = () => {
  const [image,setImage] = useState("");
  const [text,setText] = useState("");
  const [title,setTitle] = useState("");
  const [date,setDate] = useState("");
  
  const [loading,setLoading] = useState(false);

  const fetchData = async() => {
    setLoading(true);
      const res = await fetch(`https://api.nasa.gov/planetary/apod/?api_key=${import.meta.env.VITE_SECRET_KEY}`, {method: "GET"});
      const data = await res.json();
      setImage(data.url);
      setText(data.explanation);
      setTitle(data.title);
      setDate(data.date);

      setLoading(false);
  }

  useEffect( ()=>{
              fetchData();

  }
  
  ,[image,text,title,date])

  return (
    <div className="h-screen">
        <Header></Header>
        {loading? 
          <div className=" flex flex-col items-center justify-center">
              <Loader/>
          </div> 
              :
              
        <div className="bg-black  flex flex-col items-center justify-center md:mx-4 md:rounded-md lg:mx-6 ">
             
                <h1 className="text-xl text-purple-light font-bold my-3 lg:text-3xl ">The image of today :</h1>
                <h1 className="text-md text-white font-semibold my-4 lg:text-3xl ">{title}</h1>
                <img className="w-1/2 h-1/2 rounded-md" src={image}></img>
                {/* < div style={{backgroundImage: `url(${image})`}} className="w-64 h-64 bg-custom-bg bg-cover bg-center bg-no-repeat"></div> */}
                <p className="text-white text-sm">{date} </p>
                <p className="text-white m-6 text-center">{text}</p>
              
              
        </div>
}

    </div>
  )
}

export default Pod

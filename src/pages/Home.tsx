import Header from "../components/Header"
import space from "../assets/space.jpg"
import bg from "../assets/space3.svg"
import { CiCircleChevDown } from "react-icons/ci";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Home:React.FC = () => {
  const scrollBtnRef = useRef<null | HTMLDivElement>(null);
  const scrollBtn = () => {
      scrollBtnRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className="h-screen overflow-x-hidden">
        <Header />
        <div className="flex mx-6 justify-center items-center h-3/4 lg-mx-0 lg:justify-evenly ">
          <div className="md:items-between md:w-2/5 lg:text-xl lg:w-1/5 l">
              <h1 className="text-xl font-bold mb-3 lg:text-3xl ">Welcome to <span className="text-purple ">spacin</span></h1>
              <p className="">Use our website to discover amazing things about space, interact with nasa's latest technologies and more.</p>
              <button onClick={scrollBtn} className="text-purple mt-2 self-center  animate-bounce">< CiCircleChevDown className=" w-10 h-10"/></button>
          </div>
          <img className="hidden w-2/5 h-2/5 rounded-md md:block md:w-2/5 md:h-2/5 lg:w-1/5 " src={space}></img>
          
        </div>

        <div ref={scrollBtnRef} id="down-section" style={{backgroundImage :  `url(${bg})`}} className=" flex flex-col justify-center items-center h-full text-white">
            <h1 className="text-xl font-bold my-4">Our feautures:</h1>
            <ul className="flex flex-col justify-center items-center">
                <Link to="/pod" className="my-3 duration-100 rounded-lg p-2 shadow-white shadow-md hover:shadow-sm ">Image of the day.</Link>
                <Link to="/rovers" className="my-3 duration-100 rounded-lg p-2 shadow-white shadow-md hover:shadow-sm">Photos from rovers on mars.</Link>
                
            </ul>
        </div>
        
    </div>
  )
}

export default Home

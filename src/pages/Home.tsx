import Header from "../components/Header"
import space from "../assets/space.jpg"
import { CiCircleChevDown } from "react-icons/ci";
function Home() {
  return (
    <div className="h-screen">
        <Header/>
        <div className="flex mx-6 justify-center items-center h-3/4 lg-mx-0 lg:justify-evenly ">
          <div className="md:items-between md:w-2/5 lg:text-xl lg:w-1/5 l">
              <h1 className="text-xl font-bold mb-3 lg:text-3xl ">Welcome to <span className="text-purple ">spacin</span></h1>
              <p className="">Use our website to discover amazing things about space, interact with nasa's latest technologies and more.</p>
              <button className="text-purple mt-2 self-center  animate-bounce">< CiCircleChevDown className=" w-10 h-10"/></button>
          </div>
          <img className="hidden w-2/5 h-2/5 rounded-md md:block md:w-2/5 md:h-2/5 lg:w-1/5 " src={space}></img>
          
        </div>
        
    </div>
  )
}

export default Home

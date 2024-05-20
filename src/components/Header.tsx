import { useLocation } from 'react-router-dom';
import { IoReturnUpBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Header:React.FC = () => {
  const location = useLocation();
  return (
    <div className="w-screen flex items-center justify-evenly  h-1/4">
        { location.pathname != '/' && 
           ( <Link className=' border-2 p-2 hover:p-1 hover:m-3 rounded-md border-purple hover:bg-purple hover:text-white duration-100  ' to="../"><IoReturnUpBack /></Link>) 
        }
        <h1 className="font-bold text-3xl  ">SPAC<span className="text-purple-light">IN</span></h1>
        {location.pathname == '/' && ( <a className="text-purple bg-white rounded-md   border-2 border-purple hover:bg-purple hover:text-white duration-100  " href="https://yahyaabh.github.io/portfolio/"><button className="p-2 ">about us</button></a>)}
    </div>
  )
}

export default Header


import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'; 
import Home from "./pages/Home"
import Pod from "./pages/Pod"
import Rovers from "./pages/Rovers";
import  Analysis  from './pages/Analysis';
function App() {

  return (
    
    <Router>
      <ToastContainer />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pod' element={<Pod/>} />
            <Route path='/rovers' element={<Rovers/>}/>
            <Route path='/imageai' element={<Analysis/>} />
        </Routes>
    </Router>
  )
}

export default App

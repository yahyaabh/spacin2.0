
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'; 
import Home from "./pages/Home"
import Pod from "./pages/Pod"
import Rovers from "./pages/Rovers";

function App() {

  return (
    
    <Router>
      <ToastContainer />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pod' element={<Pod/>} />
            <Route path='/rovers' element={<Rovers/>}/>
        </Routes>
    </Router>
  )
}

export default App

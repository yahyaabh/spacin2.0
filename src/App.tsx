
import './index.css'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'; 
import Home from "./pages/Home"
import Pod from "./pages/Pod"
function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pod' element={<Pod/>} />
        </Routes>
    </Router>
  )
}

export default App

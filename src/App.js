import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from  './Components/Home';
import Contacts  from './Components/Contact'
import Shop from './Components/Shop'
import About from './Components/About'
import OurCycle from './Components/Ourcycle';
import NewCycle from './Components/NewCycles';
import Login from './Components/Login';

function App() {
  return (<>
    
        <Navbars/>
        <Routes>
          <Route exact path="/" element={<Home/>}>Home</Route>
          <Route exact path="/about" element={<About/>}>About</Route>
          <Route exact path="/ourcycles" element={<OurCycle/>}>Our Cycle</Route>
          <Route exact path="/shop" element={<Shop/>}>Shop</Route>
          <Route exact path="/new" element={<NewCycle/>}>NewCycle</Route>
          <Route exact path="/cotacts" element={<Contacts/>}>Contact</Route>
          <Route exact path="/login" element={<Login/>}>Login</Route>
        </Routes>
     </>
  );
}

export default App;

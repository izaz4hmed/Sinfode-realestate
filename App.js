import './App.css';
// import Apicall from './Component/Apicall';
// import Contact from './Component/Contact';
// import Carousal from './Component/Carousal';
import Loginpage from './Component/Loginpage'
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Framepage from './Component/Framepage';
import Readmore from './Component/Readmore';
import FoundPGs from './Component/FoundPGs';
// import Readmore from './Component/Readmore.'

function App() {
  return (
    <>
      <div className="">
        {/* <Contact /> */}
        <Router>
          <Routes>
            <Route exact path='/' element={<Header/>} />
            <Route  path='/login' element={<Loginpage/>} />
            <Route  path='/framepage' element={<Framepage/>} />
            <Route  path='/readmore' element={<Readmore/>} />
            <Route  path='/found' element={<FoundPGs/>} />
          </Routes>
        {/* <Apicall/> */}
        </Router>
      </div>
    </>
  );
}

export default App;

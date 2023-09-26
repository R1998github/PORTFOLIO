
import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Resume from './Component/Res'


  
function App(){


return (
    <>
    <div>
    
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/resume" element={<Resume/>} />
    
  </Routes>
</BrowserRouter>








    </div>
     
    </>
  )

}
  




export default App;

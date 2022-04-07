import './App.css';
import Mounting from './Component/Mounting';
import Unmounting from './Component/Unmounting';
import Updating from './Component/Updating';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Navbar/>
    <Routes>
     <Route path='/Mounting' element={<Mounting/>}/> 
    <Route path='/Updating' element={<Updating/>}/>
    <Route path='/Unmounting' element={<Unmounting/>}/>
</Routes>
</BrowserRouter>

   
    </div>
  );
}

export default App;

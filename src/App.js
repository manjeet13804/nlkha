import Home from "./components/Home/Home";
import FruitsAndVeg from "./components/FruitAndVeg/FruitAndVeg";
import NotFound from "./components/NotFound/NotFound";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fruits&vegitable' element={<FruitsAndVeg/>}/>
          <Route path='*' element={NotFound}/>
        </Routes>
      </BrowserRouter>
    
  </>
    )
}

export default App;

import logo from './logo.svg';
import './App.css';
import Homepage from './homepage/Homepage';
import Gamepage from './gamepage/Gamepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/gamepage' element={<Gamepage/>} />
      </Routes>
    </div>
  );
}

export default App;

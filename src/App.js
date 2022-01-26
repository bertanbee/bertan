import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Routes/Home';
import Curriculum from './Routes/Curriculum';
import Perfil from './Routes/Perfil';
import Bastidores from './Routes/Bastidores';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/curriculo" element={<Curriculum />} />
        <Route exact path="/perfil" element={<Perfil />} />
        <Route exact path="/bastidores" element={<Bastidores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

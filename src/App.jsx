import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Components/telas/Login'
import Formulario from "./Components/telas/FormLogin";
import Cadastros from "./Components/telas/Cadastros";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/cadastros' element={<Cadastros/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

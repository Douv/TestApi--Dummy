import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio';
import Comunidad from './pages/Comunidad';
import Certificaciones from './pages/Certificaiones';
import Campos from './pages/Campos';
 

const App = () => {

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
          <Route path="/campos" element={<Campos />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
import "./Header.css";
import "@fontsource/nunito";
import { BrowserRouter as Router,
  Routes, 
  Route,
  Link, useNavigate } from 'react-router-dom';
import Home from "../Home/Home";
import Profissional from "../Profissional/Profissional";
import Usuaria from "../Usuaria/Usuaria";

function Header() {
  return (
    <Router>
      <div className="Header">
        <h2 className="Header__title">Lacrei</h2>
        <nav className="Header__links" >
          <Link to='/Frontend_Lacrei/'>Home</Link>
          <Link to='/Frontend_Lacrei/PessoaUsuaria'>Pessoa Usuária</Link>
          <Link to='/Frontend_Lacrei/Profissional'>Profissional</Link>          
        </nav>
        <Routes>
          <Route path="/Frontend_Lacrei/" element={<Home />} />
          <Route path="/Frontend_Lacrei/PessoaUsuaria" element={<Usuaria />} />
          <Route path="/Frontend_Lacrei/Profissional" element={<Profissional />} />
        </Routes>          
      </div>
    </Router>      
  )
}

export default Header;



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
          <Link to='/'>Home</Link>
          <Link to='/PessoaUsuaria'>Pessoa Usuária</Link>
          <Link to='/Profissional'>Profissional</Link>          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PessoaUsuaria" element={<Usuaria />} />
          <Route path="/Profissional" element={<Profissional />} />
        </Routes>          
      </div>
    </Router>      
  )
}

export default Header;



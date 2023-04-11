import "./Home.css";
import "@fontsource/nunito";
import { useNavigate } from "react-router-dom";

function Home() {

    let navigate = useNavigate();
    
    return (
        <div className="Home"> 
            <div className="Home__tittle">
                <p>Boas vindas a Lacrei Saúde</p>
            </div> 
            <div className="Home__body">
                <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN +</p> 
            </div>                   
            <div className="Button">                  
                <button onClick={() => navigate("/Frontend_Lacrei/PessoaUsuaria")} className="Button__dark"> Pessoa Usuária </button>                
                <button onClick={() => navigate("/Frontend_Lacrei/Profissional")} className="Button__ligth"> Profissional </button>   
            </div> 
            <div className="Image">
                <img src="https://app-lacrei-saude-4nn3.vercel.app/assets/home-icon-cca9946c.svg" alt="Home" />
            </div>             
        </div>
    )
}

export default Home;
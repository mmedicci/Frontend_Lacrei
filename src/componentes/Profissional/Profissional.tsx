import "./Profissional.css";
import "@fontsource/nunito";
import { useNavigate } from "react-router-dom";

function Profissional() {

    return (
        <div className="Profissional">                
            <div className="Tittle">
                <p>Profissional</p>
            </div>            
            <div className="Body">
                <ul className="Rectangulo">
                    <li> A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por 
                         profissionais de qualidade e que atendam às suas necessidades de forma 
                         segura e acolhedora.
                    </li>
                </ul>     
            </div>   
            <div className="Image">
                <img src="https://app-lacrei-saude-4nn3.vercel.app/assets/profissional-icon-d03cd9d2.svg" alt="Profissional" />
            </div>                                             
        </div>
    )
}

export default Profissional;
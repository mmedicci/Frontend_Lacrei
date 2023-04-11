import "./Usuaria.css";
import "@fontsource/nunito";

function Usuaria() {
    return (
        <div className="Usuaria">                
            <div className="Tittle">
                <p>Pessoa Usuária</p>
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
                <img src="https://app-lacrei-saude-4nn3.vercel.app/assets/pessoa-usuaria-icon-82fecc41.svg" alt="Usuaria" />
            </div>                        
            
             
        </div>
    )
}

export default Usuaria;
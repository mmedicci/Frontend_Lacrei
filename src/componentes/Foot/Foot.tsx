import "./Foot.css";
import "@fontsource/nunito";
import { BrowserRouter as Router,
    Routes, 
    Route,
    Link, useNavigate } from 'react-router-dom';

function Foot() {
    return (
        <div className="Foot">
            <div className="Footer__links">
                <a href="/">Home</a>
                <a href="/PessoaUsuaria">Pessoa Usuária</a>
                <a href="/Profissional" >Profissional</a>
            </div>
            <div className="Redes">                    
                    <div className="facebook">
                        <a href="https://www.facebook.com/lacrei.saude" target="_blank">                                 
                            <img className="img_face" src="https://th.bing.com/th/id/OIP.BJm8YGjB6WEF0Qd2snGOqwHaHa?w=180&h=181&c=7&r=0&o=5&pid=1.7" 
                            alt="facebook" width="40" height="40"/>
                        </a>    
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com/lacrei.saude/" target="_blank">
                            <img className="img_inst" src="https://th.bing.com/th/id/OIP.9hqAAyVhcyR0iaYxkVGHSwHaHB?pid=ImgDet&w=208&h=196&c=7" 
                            alt="instagram" width="40" height="40"/> 
                        </a>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/company/lacrei/" target="_blank">                                 
                            <img className="img_link" src="https://th.bing.com/th/id/OIP._hlNR03PmBYk3OSiu08pMAAAAA?pid=ImgDet&w=150&h=150&c=7" 
                            alt="linkedin" width="40" height="40"/>
                        </a>    
                    </div>                    
            </div>
            <div className="Foot__text">
                <p> Desafio Front End Lacrei</p>
            </div>

        </div>
    )
}

export default Foot;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="social-net">
                <span>Redes sociais&ensp;</span>
                <span className="social-footer-icon"><FontAwesomeIcon icon={faYoutube}/></span>
                <span  className="social-footer-icon"><FontAwesomeIcon icon={faInstagram}/></span>
                <span  className="social-footer-icon"><FontAwesomeIcon icon={faFacebook}/></span>
            </p>

            <p className="footer-links-group left">
                <span className="footer-links">Sobre nós</span>
                <span className="footer-links">Segurança e privacidade</span>
                <span className="footer-links">Trocas e devoluções</span>
            </p>

            <div className="right-footer">
                <p className="footer-links-group">
                    <span className="footer-links">Política de entregas</span>
                    <span className="footer-links">Política de cancelamentos</span>
                    <span className="footer-links">Política de privacidade</span>
                </p>
            </div>

            <div className="sac">
                <p className="footer-p">Central de relacionamento</p>
                <button id="sac-btn">Tire suas dúvidas</button>
            </div>

            <div className="pagamentos">
                <p className="footer-p">Pague com boleto ou cartão</p>
                <img src="/pagamentos.jpg"/>
            </div>

            <div className="seguranca">
                <p className="footer-p">Segurança</p>
                <img src="/seguranca.jpg"/>
            </div>

            <div className="credits">
                <p>Criado por <a href="https://github.com/amandie-ct">Amanda Carvalho</a></p>
            </div>

        </footer>
    );
}
 
export default Footer;
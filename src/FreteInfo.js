import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';


const FreteInfo = () => {
    return (
        <div id="nav-frete">
            <FontAwesomeIcon icon={faTruck}/>
            <p>&ensp; Frete grátis acima de R$ 99,99 ou retire na loja</p>
        </div>
    );
}
 
export default FreteInfo;
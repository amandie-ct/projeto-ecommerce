import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Categorias = () => {
    return (
        <div className="categorias-container">
            <button id="categorias-btn">
                <FontAwesomeIcon icon={faBars}/>
                &ensp;Categorias</button>
            <div className="categorias-dropdown">
                <a href="#" class="active">adsa</a>
                <a href="#" class="active">bdasdsa</a>
                <a href="#" class="active">cdsads</a>
                <a href="#" class="active">dasdsa</a>
                <a href="#" class="active">edas</a>
                <a href="#" class="active">fdasdsa</a>
            </div>
        </div>
    );
}
 
export default Categorias;
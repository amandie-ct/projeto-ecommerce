import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    return (
        <div id="search-bar">
            <input type="text" placeholder="O que você está procurando?"/>
            <button id="search-button">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    );
}
 
export default SearchBar;
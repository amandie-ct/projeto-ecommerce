import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <button id="shopping-cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
            &ensp;Carrinho
        </button>
    );
}
 
export default Cart;
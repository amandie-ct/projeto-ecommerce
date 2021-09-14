import Categorias from "./Categorias"

const Menu = () => {
    return (
        <div className="menu-container">
            <ul>
                <li>
                    <Categorias/>
                </li>
                <li>
                    <p>Promoções</p>
                </li>

                <li>
                    <p>Lançamentos</p>
                </li>
                <li>
                    <p>Baixe o app</p>
                </li>
            </ul>


        </div>
    );
}
 
export default Menu;
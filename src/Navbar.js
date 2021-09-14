import FreteInfo from "./FreteInfo"
import SearchBar from "./SearchBar"
import Menu from "./Menu";
import Login from "./Login";
import Cart from "./Cart";

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="navbar-main">
                <SearchBar/>
                <Login/>
                <Cart/>
            </div>
            <Menu/>
            <FreteInfo/>
        </nav>
    );
}
 
export default Navbar;
import logoimg from "../assets/logo.jpg";
import Button from "../ui/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";

function Header() {
    const cartCtx = useContext(CartContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="A restaurant" />
                <h1>Crave Hub</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
}
export default Header;

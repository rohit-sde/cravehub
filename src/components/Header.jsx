import logoimg from "../assets/logo.jpg";
import Button from "../ui/Button";

function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="A restaurant" />
                <h1>Crave Hub</h1>
            </div>
            <nav>
                <Button textOnly>Cart (0)</Button>
            </nav>
        </header>
    );
}
export default Header;

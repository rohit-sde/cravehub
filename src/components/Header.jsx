import logoimg from "../assets/logo.jpg";

function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="A restaurant" />
                <h1>Crave Hub</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    );
}
export default Header;

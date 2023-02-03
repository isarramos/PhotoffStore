import logo from '../images/logo.png';
import '../styles/NavBar.css';
function NavBar(){
    return(
        <nav>
            <h1>PhotOffStore</h1>
            <ul>
                <li><img className="logo" src={logo}></img></li>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#cart">Carrinho</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}
export default NavBar
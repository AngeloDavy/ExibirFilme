import "./header.css"

function Header(){

    return(
        <>
            <header className="header">
                <a href="" className="header-brand">Galleria</a>
                <nav className="header-navbar">
                <ul>
                    <li>
                    <a href="#" class="active">Home</a>
                    </li>
                    <li>
                    <a href="#">Fotos</a>
                    </li>
                    <li>
                    <a href="#">Serviços</a>
                    </li>
                    <li>
                    <a href="#">Sobre</a>
                    </li>
                    <li>
                    <a href="#">Contato</a>
                    </li>
                </ul>
                </nav>
                <div className="header-social-media">
                <ul>
                    <li>
                    <a href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <i className="fab fa-youtube"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </header>
        </>
    )

}

export default Header;
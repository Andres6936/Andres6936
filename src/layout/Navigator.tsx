import {Link} from "react-router";

export function Navigator() {
    return (
        <header>
            <a id="skip-nav" className="screenreader-text" href="#main-content">
                Ir al contenido
            </a>

            <nav className="primary-nav">
                <ul role="list" className="nav-list">
                    <li className="active">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about">Acerca</Link>
                    </li>
                    <li>
                        <Link to="/projects">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
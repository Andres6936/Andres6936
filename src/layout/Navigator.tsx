import React from "react";
import {Link, useLocation} from "react-router";

export function Navigator() {
    return (
        <header>
            <a id="skip-nav" className="screenreader-text" href="#main-content">
                Ir al contenido
            </a>

            <nav className="primary-nav">
                <ul role="list" className="nav-list">
                    <NavItem to="/">Inicio</NavItem>
                    <NavItem to="/about">Acerca</NavItem>
                    <NavItem to="/projects">Proyectos</NavItem>
                    <NavItem to="/contact">Contacto</NavItem>
                </ul>
            </nav>
        </header>
    )
}

type Props = {
    to: string,
    children: React.ReactNode,
}

const NavItem = ({to, children}: Props) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}
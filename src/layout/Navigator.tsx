import React from "react";
import {Link, useLocation} from "react-router";

import Styles from './Navigator.module.css'

export function Navigator() {
    return (
        <header className={Styles.Header}>
            <nav className={Styles.PrimaryNav}>
                <ul role="list">
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
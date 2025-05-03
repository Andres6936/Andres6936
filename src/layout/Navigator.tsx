export function Navigator() {
    return (
        <header>
            <a id="skip-nav" className="screenreader-text" href="#main-content">
                Ir al contenido
            </a>

            <nav className="primary-nav">
                <ul role="list" className="nav-list">
                    <li className="active">
                        <a href="/public">Inicio</a>
                    </li>
                    <li>
                        <a href="/about/">Acerca</a>
                    </li>
                    <li>
                        <a href="/courses/">Proyectos</a>
                    </li>
                    <li>
                        <a href="/newsletter/">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export function Navigator() {
    return (
        <header>
            <a id="skip-nav" className="screenreader-text" href="#main-content">
                Skip to Content
            </a>

            <nav className="primary-nav">
                <ul role="list" className="nav-list">
                    <li className="active">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/articles/">Articles</a>
                    </li>
                    <li>
                        <a href="/about/">About</a>
                    </li>
                    <li>
                        <a href="/courses/">Courses</a>
                    </li>
                    <li>
                        <a href="/resources/">Resources</a>
                    </li>
                    <li>
                        <a href="/newsletter/">Newsletter</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
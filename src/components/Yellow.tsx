export function Yellow() {
    return (
        <section aria-labelledby="courses-title" className="home-section course">
            <div className="container flow">
                <header>
                    <h2 id="courses-title" className="section__title text-neutral-100">Proyectos</h2>
                    <p className="section__subtitle text-neutral-100">profesionales & personales</p>
                </header>
                <p>
                    <strong>Descubre la diversidad de mis habilidades e intereses en acción.</strong>
                </p>

                <p>
                    Explora una selección de los proyectos en los que he trabajado profesionalmente y aquellos que
                    desarrollo con pasión en mi tiempo libre.
                </p>
                <a href="/courses" className="button" data-reverse="true">Explorar mis proyectos</a>
            </div>
        </section>
    )
}
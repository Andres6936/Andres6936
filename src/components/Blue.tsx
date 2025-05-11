export function Blue() {
    return (
        <section aria-labelledby="article-title" className="home-section article">
            <div className="container flow">
                <header>
                    <h2 id="article-title" className="section__title">Sobre mi</h2>
                    <p className="section__subtitle">hitos, carrera & estudios</p>
                </header>
                <p>
                    ¿Te interesa conocer el camino que me ha llevado hasta aquí? Te invito a
                    explorar los <strong>hitos clave de mi carrera</strong>, desde <strong>mis estudios </strong>
                    iniciales hasta mi experiencia profesional actual.
                </p>
                <p>
                    Descubre las áreas en las que me he especializado y cómo mi formación ha moldeado mi enfoque y
                    habilidades.
                </p>
                <a href="/articles" className="button">¿quién soy?</a>
            </div>
        </section>
    )
}
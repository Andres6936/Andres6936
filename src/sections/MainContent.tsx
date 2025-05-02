export function MainContent() {
    return (
        <main id="main-content">

            <div className="container">
                <section aria-labelledby="hero-title" className="hero">
                    <h1 id="hero-title" className="hero__title">
                        Hola, soy Joan. Convierto ideas de negocio en plataformas completas, con presencia en móviles y
                        web.
                    </h1>
                    <div className="hero__paragraph flow">
                        <p>
                            Mi pasión es transformar ideas de negocio en realidades digitales completas. Me encargo de
                            diseñar y desarrollar plataformas integrales que abarcan tanto la experiencia móvil como la
                            presencia web.
                        </p>
                        <p>
                            Mi objetivo es ofrecer una <strong>solución unificada que permita a tu negocio
                            alcanzar a tu audiencia</strong> en todos los dispositivos de manera eficiente y con una
                            imagen profesional impactante.
                        </p>
                    </div>

                    <picture>
                        <source type="image/avif" srcSet="/img/x400.avif 300w, /img/x800.avif 600w"/>
                        <source type="image/webp" srcSet="/img/x400.webp 300w, /img/x800.webp 600w"/>
                        <source type="image/jpg" srcSet="/img/x400.jpg 300w, /img/x800.jpg 600w"/>
                        <img src="/img/x400.jpg" width="400" height="400" alt="Kevin smiling" loading="lazy"
                             decoding="async"/></picture>
                </section>
            </div>


            <section aria-labelledby="youtube-title" className="home-section youtube">
                <div className="container flow">
                    <header>
                        <h2 id="youtube-title" className="section__title">youtube</h2>
                        <p className="section__subtitle">recomendaciones</p>
                    </header>
                    <p>
                        <strong>Consejos, trucos y tutoriales semanales sobre diseño y desarrollo web
                            front-end.</strong> Con un enfoque en HTML y CSS, junto con un toque de JS, mis videos se
                        centran en la comprensión de <strong>conceptos fundamentales</strong>, otros exploran <strong>
                        propiedades de CSS poco conocidas</strong> o que a menudo se usan incorrectamente, y también hay
                        series largas que exploran cómo tomar todo y <strong>construir páginas reales</strong>.
                    </p>
                    <a href="https://youtube.com/kevinpowell" className="button">ver en ytb</a>
                </div>

            </section>

            <section aria-labelledby="article-title" className="home-section article">
                <div className="container flow">
                    <header>
                        <h2 id="article-title" className="section__title">sobre mi</h2>
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
                    <a href="/articles" className="button">leer ahora</a>
                </div>
            </section>

            <section aria-labelledby="courses-title" className="home-section course">
                <div className="container flow">
                    <header>
                        <h2 id="courses-title" className="section__title text-neutral-100">proyectos</h2>
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

            <section aria-labelledby="patreon-title" className="home-section patreon" style={{"--clr": "#e12911"}}>
                <div className="container flow">
                    <header>
                        <h2 id="patreon-title" className="section__title">contacto</h2>
                        <p className="section__subtitle">help support me</p>
                    </header>
                    <p>
                        <strong>¿Tienes una idea en mente? ¿Un proyecto que quieres hacer realidad?</strong>
                    </p>
                    <p>
                        Ponte en contacto conmigo a través de los siguientes medios. Recuerda: <strong>"Si lo puedes
                        imaginar lo puedo hacer."</strong>
                    </p>
                    <p>
                        ¡Estoy listo para escuchar tus propuestas!
                    </p>

                    <a href="https://patreon.com/kevinpowell" className="button">contáctame</a>
                </div>
            </section>
        </main>
    )
}
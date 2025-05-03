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
                        <h2 id="youtube-title" className="section__title">Interés</h2>
                        <p className="section__subtitle">objetivos & dedicación</p>
                    </header>
                    <p>
                        Mi interés se centra en la <strong>automatización de procesos</strong> como una herramienta
                        clave para la mejora continua. Valoro enormemente el <strong>desarrollo colaborativo</strong>,
                        reconociendo su potencial para generar soluciones robustas y bien fundamentadas.
                    </p>
                    <p>
                        Además, <strong>me dedico a analizar y resolver problemas de negocio</strong>, aportando una
                        perspectiva lógica y creativa para alcanzar resultados tangibles.
                    </p>
                    <a href="https://youtube.com/kevinpowell" className="button">ver más</a>
                </div>

            </section>

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

            <section aria-labelledby="patreon-title" className="home-section patreon">
                <div className="container flow">
                    <header>
                        <h2 id="patreon-title" className="section__title">Contacto</h2>
                        <p className="section__subtitle">contáctame</p>
                    </header>
                    <p>
                        <strong>¿Tienes una idea en mente? ¿Un proyecto que quieres hacer realidad?</strong>
                    </p>
                    <p>
                        Ponte en contacto conmigo a través de los siguientes medios. Recuerda: <strong>"Si existe en tu
                        mente, la posibilidad está en mis manos."</strong>.
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
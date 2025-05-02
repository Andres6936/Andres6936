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
                        <p className="section__subtitle">learn for free</p>
                    </header>
                    <p>
                        <strong>Weekly front-end web development &amp; design tips, tricks, and tutorials</strong>. With
                        a focus
                        on HTML &amp; CSS, along with a splash of JS, my videos focus on understanding
                        <strong>fundamental concepts</strong>, others explore
                        <strong>little known or often misused CSS properties</strong>, and there are long series that
                        explore
                        taking everything and
                        <strong>building out actual pages</strong>.
                    </p>
                    <a href="https://youtube.com/kevinpowell" className="button">watch on yt</a>
                </div>

            </section>

            <section aria-labelledby="article-title" className="home-section article">
                <div className="container flow">
                    <header>
                        <h2 id="article-title" className="section__title">articles</h2>
                        <p className="section__subtitle">quick hit tips &amp; tricks</p>
                    </header>
                    <p>
                        While creating my YouTube videos, I come across a lot of
                        <strong>fun snippets of information</strong>
                        and
                        <strong>little known CSS properties</strong>
                        that aren't really worth building full videos about.
                    </p>
                    <p>
                        I share these little bits of information — plus the occasional deep dive — through my articles.
                    </p>
                    <a href="/articles" className="button">let's get reading</a>
                </div>
            </section>

            <section aria-labelledby="courses-title" className="home-section course">
                <div className="container flow">
                    <header>
                        <h2 id="courses-title" className="section__title text-neutral-100">courses</h2>
                        <p className="section__subtitle text-neutral-100">step up your front-end game</p>
                    </header>
                    <p>
                        <strong>Premium courses to help you step up your front-end game in short order.</strong>
                    </p>
                    <p>
                        While there are a ton of free resources out there, it can be hard to figure out which ones are
                        good,
                        which are bad, and in what order to follow them in. Because of that, I’ve decided to start
                        creating
                        premium courses to help.
                        <strong>They are deep dives into specific topics, helping you level up your game in as little
                            time as
                            possible</strong>.
                    </p>
                    <p>
                        I have a number of courses available covering a wide range of CSS goodness. Check out my <a
                        href="/courses">courses page</a> to see them all.
                    </p>
                    <a href="/courses" className="button" data-reverse="true">let's step up my game</a>
                </div>
            </section>

            <section aria-labelledby="patreon-title" className="home-section patreon" style={{"--clr": "#e12911"}}>
                <div className="container flow">
                    <header>
                        <h2 id="patreon-title" className="section__title">patreon</h2>
                        <p className="section__subtitle">help support me</p>
                    </header>
                    <p>Patreon is a nice, simple way to support creators who provide you with value. Thanks to my
                        patrons I've
                        been able to upgrade my equipment a few times now, and they've enabled me to devote more time to
                        making
                        videos.</p>

                    <a href="https://patreon.com/kevinpowell" className="button">support me on Patreon</a>
                </div>
            </section>
        </main>
    )
}
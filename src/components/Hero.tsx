export function Hero() {
    return (
        <div className="container">
            <section aria-labelledby="hero-title" className="hero">
                <h1 id="hero-title" className="hero__title">
                    Hola, soy Joan.<br/> Convierto ideas de negocio en plataformas, con presencia en móviles y
                    web.
                </h1>
                <div className="hero__paragraph flow">
                    <p>
                        Mi pasión es transformar ideas de negocio en realidades digitales. Me encargo de
                        diseñar y desarrollar plataformas integrales que abarcan tanto la experiencia móvil como la
                        presencia web.
                    </p>
                    <p>
                        Mi objetivo es ofrecer una <strong>solución unificada que permita a tu negocio
                        alcanzar a tu audiencia</strong> en todos los dispositivos de manera eficiente y con una
                        imagen profesional.
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
    )
}
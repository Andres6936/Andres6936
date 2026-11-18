import Styles from "./Hero.module.css";

const Black = () => (
  <picture>
    <source
      type="image/avif"
      srcSet="/img/BGx720.avif 720w, /img/BGx1080.avif 1080w, /img/BGx4K.avif 2160w"
      sizes="(max-width: 768px) 90vw, 400px"
    />
    <source
      type="image/webp"
      srcSet="/img/BGx720.webp 720w, /img/BGx1080.webp 1080w, /img/BGx4K.webp 2160w"
      sizes="(max-width: 768px) 90vw, 400px"
    />
    <img
      src="/img/BGx720.webp"
      width="400"
      height="400"
      alt="Joan Photo"
      decoding="async"
    />
  </picture>
);

const Color = () => (
  <picture>
    <source
      type="image/avif"
      srcSet="/img/GGx720.avif 720w, /img/GGx1080.avif 1080w, /img/GGx4K.avif 2160w"
      sizes="(max-width: 768px) 90vw, 400px"
    />
    <source
      type="image/webp"
      srcSet="/img/GGx720.webp 720w, /img/GGx1080.webp 1080w, /img/GGx4K.webp 2160w"
      sizes="(max-width: 768px) 90vw, 400px"
    />
    <img
      src="/img/GGx720.webp"
      width="400"
      height="400"
      alt="Joan Photo"
      decoding="async"
    />
  </picture>
);

export function Hero() {
  return (
    <div className="container">
      <section aria-labelledby="hero-title" className={Styles.Hero}>
        <h1 id="hero-title" className={Styles.Title}>
          Hola, soy Joan.
          <br /> Convierto ideas de negocio en plataformas, con presencia en
          móviles y web.
        </h1>
        <div className={"flow " + Styles.Paragraph}>
          <p>
            Mi pasión es transformar ideas de negocio en realidades digitales.
            Me encargo de diseñar y desarrollar plataformas integrales que
            abarcan tanto la experiencia móvil como la presencia web.
          </p>
          <p>
            Mi objetivo es ofrecer una{" "}
            <strong>
              solución unificada que permita a tu negocio alcanzar a tu
              audiencia
            </strong>{" "}
            en todos los dispositivos de manera eficiente y con una imagen
            profesional.
          </p>
        </div>

        <Color />
      </section>
    </div>
  );
}

import { HomeSection } from "./HomeSection.tsx";
import Shared from "~/layout/Shared.module.css";
import Styles from "./Blue.module.css";
import { merge } from "~/lib/utility.ts";

export function Blue() {
  return (
    <HomeSection
      id="article-title"
      title="Sobre mi"
      subtitle="hitos, carrera & estudios"
      variant="Article"
      buttonStyle={{
        to: "/about",
        title: "¿quién soy?",
      }}
    >
      <section className={merge(Shared.Header, Styles.Header)}>
        <h2>Sobre mi</h2>
        <p>hitos, carrera & estudios</p>
      </section>
      <p>
        ¿Te interesa conocer el camino que me ha llevado hasta aquí? Te invito a
        explorar los <strong>hitos clave de mi carrera</strong>, desde{" "}
        <strong>mis estudios </strong>
        iniciales hasta mi experiencia profesional actual.
      </p>
      <p>
        Descubre las áreas en las que me he especializado y cómo mi formación ha
        moldeado mi enfoque y habilidades.
      </p>
    </HomeSection>
  );
}

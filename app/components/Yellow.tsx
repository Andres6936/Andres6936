import { HomeSection } from "./HomeSection.tsx";
import Shared from "~/layout/Shared.module.css";
import Styles from "./Yellow.module.css";
import { merge } from "~/lib/utility.ts";

export function Yellow() {
  return (
    <HomeSection
      id="courses-title"
      title="Proyectos"
      subtitle="profesionales & personales"
      variant="Course"
      classNameTitle="text-neutral-100"
      classNameSubtitle="text-neutral-100"
      buttonStyle={{
        to: "/projects",
        title: "Explorar mis proyectos",
        reverse: "true",
      }}
    >
      <section className={merge(Shared.Header, Styles.Header)}>
        <h2>Proyectos</h2>
        <p>profesionales & personales</p>
      </section>

      <p>
        <strong>
          Descubre la diversidad de mis habilidades e intereses en acción.
        </strong>
      </p>

      <p>
        Explora una selección de los proyectos en los que he trabajado
        profesionalmente y aquellos que desarrollo con pasión en mi tiempo
        libre.
      </p>
    </HomeSection>
  );
}

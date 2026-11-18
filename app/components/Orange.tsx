import { HomeSection } from "./HomeSection.tsx";
import Shared from "~/layout/Shared.module.css";
import Styles from "./Orange.module.css";
import { merge } from "~/lib/utility.ts";

export function Orange() {
  return (
    <HomeSection
      id="patreon-title"
      title="Contacto"
      subtitle="contáctame"
      variant="Patreon"
      buttonStyle={{
        to: "/contact",
        title: "contáctame",
      }}
    >
      <section className={merge(Shared.Header, Styles.Header)}>
        <h2>Contacto</h2>
        <p>contáctame</p>
      </section>

      <p>
        <strong>
          ¿Tienes una idea en mente? ¿Un proyecto que quieres hacer realidad?
        </strong>
      </p>
      <p>
        Ponte en contacto conmigo a través de los siguientes medios. Recuerda:{" "}
        <strong>
          "Si existe en tu mente, la posibilidad está en mis manos."
        </strong>
        .
      </p>
      <p>¡Estoy listo para escuchar tus propuestas!</p>
    </HomeSection>
  );
}

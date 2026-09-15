import {HomeSection} from "./HomeSection.tsx";

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
        </HomeSection>
    )
}
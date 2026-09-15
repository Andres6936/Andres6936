import {HomeSection} from "./HomeSection.tsx";

export function Red() {
    return (
        <HomeSection
            id="youtube-title"
            title="Interés"
            subtitle="objetivos & dedicación"
            variant="Youtube"
            buttonStyle={{
                to: "/about",
                title: "ver más"
            }}
        >
            <p>
                Mi interés se centra en la <strong>automatización de procesos</strong> como una herramienta
                clave para la mejora continua. Valoro enormemente el <strong>desarrollo colaborativo</strong>,
                reconociendo su potencial para generar soluciones robustas y bien fundamentadas.
            </p>
            <p>
                Además, <strong>me dedico a analizar y resolver problemas de negocio</strong>, aportando una
                perspectiva lógica y creativa para alcanzar resultados tangibles.
            </p>
        </HomeSection>
    )
}
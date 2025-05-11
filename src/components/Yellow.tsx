import {HomeSection} from "./HomeSection.tsx";

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
            <p>
                <strong>Descubre la diversidad de mis habilidades e intereses en acción.</strong>
            </p>

            <p>
                Explora una selección de los proyectos en los que he trabajado profesionalmente y aquellos que
                desarrollo con pasión en mi tiempo libre.
            </p>
        </HomeSection>
    )
}
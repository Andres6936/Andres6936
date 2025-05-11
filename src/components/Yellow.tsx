import {HomeSection} from "./HomeSection.tsx";

export function Yellow() {
    return (
        <HomeSection
            to="/projects"
            id="courses-title"
            title="Proyectos"
            subtitle="profesionales & personales"
            titleButton="Explorar mis proyectos"
            variant="Course"
            dataReverseButton="true"
            classNameTitle="text-neutral-100"
            classNameSubtitle="text-neutral-100"
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
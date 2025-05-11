import {HomeSection} from "./HomeSection.tsx";

export function Blue() {
    return (
        <HomeSection
            to="/about"
            id="article-title"
            title="Sobre mi"
            subtitle="hitos, carrera & estudios"
            titleButton="¿quién soy?"
            variant="Article"
        >
            <p>
                ¿Te interesa conocer el camino que me ha llevado hasta aquí? Te invito a
                explorar los <strong>hitos clave de mi carrera</strong>, desde <strong>mis estudios </strong>
                iniciales hasta mi experiencia profesional actual.
            </p>
            <p>
                Descubre las áreas en las que me he especializado y cómo mi formación ha moldeado mi enfoque y
                habilidades.
            </p>
        </HomeSection>
    )
}
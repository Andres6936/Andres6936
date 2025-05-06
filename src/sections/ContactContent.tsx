import {ContactForm} from "../components/ContactForm.tsx";

export function ContactContent() {
    return (
        <main id="main-content">
            <div className="container flow">
                <h1 className="title">Contacto</h1>

                <h2 className="page-description">¿Tienes una idea brillante para tu próximo proyecto digital?</h2>

                <p>
                    ¿O quizás alguna pregunta sobre mis servicios o cómo puedo ayudarte a hacer realidad tu visión? No
                    dudes en ponerte en contacto conmigo.
                </p>

                <p>
                    Estoy aquí para escuchar tus inquietudes, discutir tus necesidades y explorar cómo mis habilidades
                    en desarrollo web, diseño y automatización de procesos pueden ser la clave para tu éxito.
                </p>

                <p>
                    ¡Escríbeme y comencemos a construir juntos!
                </p>

                <h3>¿Aún tienes dudas?</h3>

                <p>
                    Echa un <a href="/projects">vistazo a mis proyectos</a> para ver de lo que soy capaz. ¡Quizás
                    encuentres la inspiración que necesitas!
                </p>

                <ContactForm/>
            </div>
        </main>
    )
}
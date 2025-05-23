import React from "react";
import {Link} from "react-router";

export function AboutContent() {
    return (
        <main id="main-content">
            <div className="container flow">
                <h1 className="title">Sobre mi</h1>

                <Title>Estudios</Title>
                <p>
                    Soy un desarrollador independiente con una sólida formación en <strong>Ingeniería de Sistemas y una
                    Maestría en Informática</strong>, ambos títulos otorgados por la Universidad Santiago de Cali.
                </p>

                <p>
                    Mi especialización se centra en la construcción de <strong>soluciones web y aplicaciones
                    móviles</strong> modernas y escalables, utilizando tecnologías de vanguardia para ofrecer resultados
                    eficientes y de alto rendimiento.
                </p>

                <Title>Trayectoria</Title>

                <p>
                    Mi trayectoria reciente se ha consolidado en el ecosistema de herramientas innovadoras como Supabase
                    para la gestión de la lógica del servidor y bases de datos, Cloudflare para la optimización y
                    seguridad de la infraestructura, Inngest para la gestión robusta de flujos de trabajo asíncronos y
                    Next.js para la creación de aplicaciones web rápidas y dinámicas con React.
                </p>

                <p>
                    Cuento con una sólida experiencia en el desarrollo de aplicaciones móviles multiplataforma
                    utilizando React
                    Native con Expo. Estas tecnologías son fundamentales en mi trabajo como desarrollador independiente,
                    permitiéndome ofrecer soluciones integrales y adaptadas a las necesidades de cada proyecto.
                </p>


                <Title>Experiencia</Title>

                <p>
                    A lo largo de mi carrera, también he adquirido experiencia en plataformas como AWS y Microsoft
                    Azure, así como en bases de datos NoSQL como DynamoDB y MongoDB.
                </p>

                <p>
                    Mi enfoque actual y mi
                    mayor pericia residen en la implementación de soluciones utilizando el conjunto de tecnologías
                    previamente
                    mencionado, el cual me permite ofrecer agilidad, escalabilidad y un rendimiento óptimo tanto en la
                    web como en dispositivos móviles.
                </p>

                <Title>Competencias</Title>

                <p>
                    Mis competencias clave abarcan la optimización del rendimiento, la gestión eficiente de recursos, la
                    ingeniería de software de alta calidad, la automatización de procesos y la aplicación de principios
                    de diseño (SOLID, MVC), microservicios y estándares de la industria.
                </p>

                <Title>Objetivo</Title>

                <p>
                    Mi objetivo como desarrollador independiente es <strong>transformar ideas en
                    realidades</strong> digitales funcionales y atractivas, automatizando procesos y resolviendo
                    desafíos de negocio con un enfoque moderno y eficiente.
                </p>

                <Title>Declaración</Title>

                <p>
                    Mi formación académica y mi experiencia práctica me permiten <strong>abordar
                    proyectos de manera integral</strong>, desde la concepción hasta la implementación y el despliegue
                    en
                    diversas plataformas.
                </p>

                <p>
                    Estoy a su disposición para colaborar en sus proyectos, aportando mi experiencia y mi
                    especialización en las últimas tecnologías del desarrollo web y móvil.
                </p>

                <p>
                    <Link to="/contact">¡Conversemos sobre cómo puedo ayudarle a materializar su visión!</Link>
                </p>
            </div>
        </main>
    )
}

const Title = ({children}: { children: React.ReactNode }) => (
    <h2 className="pt:1.5rem pb:0.75rem">{children}</h2>
)
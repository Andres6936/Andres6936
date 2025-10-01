import * as CardItemComponent from "@/components/CardItem";

export function ProjectsContent() {
  return (
    <main id="main-content">
      <div className="container flow">
        <h1 className="title">Proyectos</h1>
        <p>
          Aquí comparto algunos de los proyectos que han marcado mi trayectoria
          como desarrollador independiente. Verás una mezcla de trabajos
          profesionales y proyectos personales, cada uno con sus propios
          desafíos y aprendizajes. ¡Espero que disfrutes viendo cómo he ido
          creciendo y aplicando mis conocimientos!
        </p>

        <div className="course-grid">
          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://scrimba.com/learn/spacetravel"
              title="Renovación de la Biblia Serralta"
            />
            <CardItemComponent.Labels labels={["Libre", "Abierto"]} />
            <CardItemComponent.Description>
              <p>
                Biblia Serralta es un sitio web con notas biblicas y libros
                sobre escritos por un verdadero cristiano, Luis Rafael Serralta.
                El sitio original cuenta con una estructura poco navegable,
                propia de un sitio web antiguo.
              </p>

              <p>
                El proyecto consistió en actualizar la interfaz y mejorar la
                experiencia del usuario, utilizando tecnologías modernas y
                mejores prácticas de diseño.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://scrimba.com/learn/spacetravel">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://courses.kevinpowell.co/conquering-responsive-layouts"
              title="Automatización de Residuos Ambientales"
            />
            <CardItemComponent.Labels labels={["Libre", "Cerrado"]} />
            <CardItemComponent.Description>
              <p>
                Implementación y diseño de un sistema gestion y digitalización
                en la operación diaría de Residuos Ambientales. Incluyendo la
                automatización de procesos y la reducción de costos, la apertura
                de solicitudes, el manejo contractual y la gestión de recursos
                humanos.
              </p>

              <p>
                Además, se implementó un sistema de seguimiento en el manejo de
                residuos para garantizar la transparencia y eficiencia en la
                gestión de residuos.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://courses.kevinpowell.co/conquering-responsive-layouts">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://cssdemystified.com"
              title="Aplicación de e-commerce para Android e iOS"
            />
            <CardItemComponent.Labels labels={["Libre", "Cerrado"]} />
            <CardItemComponent.Description>
              <p>
                <strong>¡Fedeltamall e-commerce!</strong>
              </p>
              <p>
                Implementación de aplicación para Android y iOS para plataforma
                de comercio electrónico, con funcionalidades avanzadas de
                seguridad y optimización de rendimiento.
              </p>

              <p>
                La aplicación cuenta con una interfaz intuitiva y fácil de usar,
                permitiendo a los usuarios realizar compras de manera rápida y
                segura.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://cssdemystified.com">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://flexboxsimplified.com"
              title="Digitalización en Servigenerador"
            />
            <CardItemComponent.Labels labels={["Cerrado"]} />
            <CardItemComponent.Description>
              <p>
                Implementación y diseño de plataforma de digitalización de
                ordenes de servicio, recordatorios y manejo de usuarios en
                Servigenerador.
              </p>
              <p>
                Características de cargue de evidencia por parte de los
                operarios en la plataforma, permitiendo un seguimiento y control
                eficiente de los procesos.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://flexboxsimplified.com">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://learn.kevinpowell.co/"
              title="Implementación pasarelas de pago Mercado Page y PSE"
            />
            <CardItemComponent.Labels labels={["Cerrado"]} />
            <CardItemComponent.Description>
              <p>
                Implementación de pasarelas de pago Mercado Page y PSE para la
                gestión de pagos y facturación electrónica en Artemisa.
              </p>
              <p>
                Integración de sistemas de facturación electrónica y gestión de
                documentos para mejorar la eficiencia operativa.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://learn.kevinpowell.co/">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://scrimba.com/learn/introhtmlcss"
              title="Diseño de aplicaciones para Android e iOS"
            />
            <CardItemComponent.Labels labels={["Libre", "Abierto"]} />
            <CardItemComponent.Description>
              <p>
                Implementación de ideas o conceptos en aplicaciones móviles para
                Android e iOS, usando Expo con React Native.
              </p>
              <p>
                Publicación de aplicaciones y distribución en tiendas de
                aplicaciones móviles.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://scrimba.com/learn/introhtmlcss">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://scrimba.com/learn/responsive"
              title="Implementación de algoritmos (Pathfinding, A*, Dijkstra)"
            />
            <CardItemComponent.Labels labels={["Libre", "Abierto"]} />
            <CardItemComponent.Description>
              <p>
                Implementación de algoritmos (Pathfinding, A*, Dijkstra) usando
                C++ para el uso de grafos y ECS (Entity-Component-System).
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://scrimba.com/learn/responsive">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>

          <CardItemComponent.Root>
            <CardItemComponent.Title
              to="https://beyondcss.dev/"
              title="Diseño e implementación de motor gráfico"
            />
            <CardItemComponent.Labels labels={["Libre", "Abierto"]} />
            <CardItemComponent.Description>
              <p>
                Diseño e implementación de motor gráfico usando C++ para
                terminales con algoritmos de búsqueda, renderizado, gestión de
                entidades y componentes.
              </p>
              <p>
                Motor gráfico enfocado en la creación de juegos y aplicaciones
                interactivas usando un simulación de terminal con True Type
                Fonts.
              </p>
            </CardItemComponent.Description>
            <CardItemComponent.Button href="https://beyondcss.dev/">
              Visitar
            </CardItemComponent.Button>
          </CardItemComponent.Root>
        </div>
      </div>
    </main>
  );
}
